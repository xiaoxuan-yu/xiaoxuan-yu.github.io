---
title: "Arara: 一个 TeX 自动化工具"
date: 2023-06-22 22:51:52
tag:
  - LaTeX
category:
  - 技术
isOriginal: true
---

## 概述

`Arara` 是一个用于自动化构建 LaTeX 文档的辅助工具，使用 Kotlin 编写。功能上，`Arara` 类似于 `latexmk` 或者 `rubber`，在设计理念上和以上两者却存在相当的区别。可以举一个简单的例子简要说明这一点：

```latex
% hello.tex
\documentclass{article}

\begin{document}
Hello world!
\end{document}
```

若使用 `latexmk` 或 `rubber` 只需要执行

```bash
latexmk -pdf hello.tex
rubber -pdf hello.tex
```

就能直接完成编译工作，这些工具会自动分析文件以决定如何进行文档的构建。而 `Arara` 则给出另外的结果：

```
arara hello.tex
  __ _ _ __ __ _ _ __ __ _
 / _` | '__/ _` | '__/ _` |
| (_| | | | (_| | | | (_| |
 \__,_|_|  \__,_|_|  \__,_|

Processing "hello.tex" (size: 70 B, last modified: 12/28/2020 23:29:16), please wait.

  ERROR

It looks like no directives were found in the provided file. Make
sure to include at least one directive and try again.

Total: 0.04 seconds
```

事实上，`Arara` 会直接报告错误。这完全是经过设计的行为，因为 `Arara` 不会进行任何猜测，所以使用时需要向它传递清晰的指令：你希望它为你做什么。为此，可以通过在文件中添加一些特殊的注释，以告知 `Arara` 如何构建文档：

```latex
% hello.tex
% arara: pdflatex
\documentclass{article}

\begin{document}
Hello world!
\end{document}
```

这些注释被称为指令。此时，再次执行 `arara hello.tex`，就能得到正确的结果：

```
$ arara hello.tex
  __ _ _ __ __ _ _ __ __ _
 / _` | '__/ _` | '__/ _` |
| (_| | | | (_| | | | (_| |
 \__,_|_|  \__,_|_|  \__,_|

Processing "hello.tex" (size: 88 B, last modified: 12/28/2020 23:30:25), please wait.

(PDFLaTeX) PDFLaTeX engine .............................. SUCCESS

Total: 0.56 seconds
```

## 指令与规则
仅仅有像源代码添加的指令是不足以完成构建工作的，还需要告知 `Arara` 如何执行这些指令。这就需要使用规则。规则规定了任务是如何完成的，而指令则决定了在当前文档上这些任务应该如何执行以完成构建工作。`Arara` 指令通常独立成行，以注释 (在 TeX 中以百分号表示) 开始，此后跟随 `arara:` 和任务名称，如

```latex
% arara: pdflatex
```

注意这里的 `pdflatex` 并非要执行的命令，而是 `Arara` 中的一个任务名称。一旦 `Arara` 找到一个指令，它将寻找相关的规则。在我们的示例中，它将查找名为 `pdflatex` 的规则，该规则显然将运行 pdflatex 命令行应用程序。规则在以其标识符命名的 YAML 文件中定义，其结构将于接下来的部分中描述。

### 规则
规则定义域 YAML 文件中，以 `yaml` 为拓展名 (尽管 `yml` 也是常用的但并不被支持)，其主要包含如下部分
- `!config` ：任何规则文件都应该以 `!config` 标记开始，以便 `Arara` 能够识别它们
- `identifier` ：规则的标识符，用于在指令中引用规则，通常应当使用不带空格、重音符号或者标点符号的小写字母
- `name` ：规则的名称，用于输出
- `authors` ：规则的作者 (可选)
- `commands` ：规则的命令列表，每个命令被视为一个子任务，一个任务可以包含一个或多个子任务
    - `name` ：子任务的名称，用于输出；
    - `command` ：子任务执行的命令，应当是如下两种值中的一种或它们混合的列表
        - `Command` 对象，如
        ```yaml
        command: "@{ return getCommand('ls') }"
        ```
        - 布尔值：可以通过规则上下文提供的脚本语言来编写代码，此时计算由 `Arara` 本身完成，因此不会执行命令，只需要返回一个布尔值
    - `exit`：子任务的退出状态
- `arguments`：任务的参数列表 (如果有的话)，注意即使没有参数也需要指定一个空列表
    - `identifier`：参数的标识符，用于在指令中引用参数 (`files` 和 `reference` 是保留字，不能用作参数标识符)
    - `flag`：报讯一个字符串，用于在指令上下文定义相应的参数时进行计算并将结果存储用于 `command` 部分的访问
    - `default`：参数的默认值
    - `required`：布尔值，指示参数是否是必需的

#### 预定义的规则
`Arara` 附带了一些预定义的规则。这些规则可以直接使用，也可以作为模板来创建自己的规则。具体可以参考 [`Arara` 文档的相关部分](https://islandoftex.gitlab.io/arara/manual/rules/)，这里列出一些常用的规则和常用选项：
- `xelatex` (其他引擎相关的规则类似)
    - `shell`： 是否使用 `--shell-escape`
    - `synctex`：是否使用 `--synctex=1`
    - `interaction`：交互模式，可选值为 `batchmode`、`nonstopmode`、`scrollmode` 和 `errorstopmode`
    - `options`：其他选项
- `biber`
- `clean`
    - `extensions`：要清理的文件扩展名列表
- `indent`
- `copy`

### 指令
指令是插入到源文件中的一个特殊注释，用于指示 `Arara` 应该如何行事。默认情况下，该工具将从文件的开头读取和提取指令。`Arara` 中的指令通常有两种：
- 空指令：只有规则名称，所有参数映射到空列表 (除去有 `default` 值的参数)，如
```latex
% arara: pdflatex
```
- 带有参数的指令：除去有规则名外，这类指令还有参数，如
```latex
% arara: pdflatex: { shell: yes }
```

有时，指令可以跨行，此时应当使用 `arara: -->` 标记将其分割，如
```latex
% arara: pdflatex{
% arara: --> shell: yes
% arara: --> synctex: yes
% arara: --> }
```
#### 条件
`Arara` 提供了用 MVEL 语言编写的逻辑表达式，以及在运行时处理的特殊运算符，以确定是否以及如何处理指令。这个特性被命名为指令条件，或者简称为条件。例如

```latex
% arara: pdflatex if missing('pdf') || changed('tex')
```

可用的条件列于下面的列表中：
- `if`
- `until`
- `unless`
- `while`

## 配置文件
`Arara` 将依次查找以下配置文件，以确定工作所需的配置：`.araraconfig.yaml → araraconfig.yaml → .arararc.yaml → arararc.yaml`。
- 全局配置文件
此类配置文件应当被放置于 `HOME` 下，所有随后执行的 `Ararat` 任务都将使用这个配置文件。然而，其优先级最低。
- 项目配置文件
此类配置文件应当被放置于项目工作目录下，所有随后执行的 `Ararat` 任务都将使用这个配置文件。但是，`Arara` 必须在工作目录内执行，否则本地配置文件查找将失败。请注意，这种方法具有最高的查找优先级，这意味着它将始终取代全局配置。

### 配置文件的结构
配置文件中常用的参数如下：
- `!config` ：任何配置文件都应该以 `!config` 标记开始，以便 `Arara` 能够识别它们
- `paths` ：路径列表，用于指定 `Arara` 应该在哪里查找规则文件。当查找规则时，`Arara` 总是搜索默认的规则路径如果未找到规则，则执行会因错误而停止。 `paths` 键指定一个目录列表，表示为普通字符串，指定了 `Arara` 应该在该列表中搜索规则。默认路径被追加到列表中。然后按顺序搜索从第一个到最后一个元素。例如
```yaml
paths:
- '/home/username/.arara/rules'
- '/home/username/.arara/custom'
```
在 `paths` 中有几个可用的变量，描述如下
  - `user.home`：以字符串的形式保存当前用户的主目录的绝对规范路径
  - `user.name`：以字符串的形式保存当前用户的用户名
  - `application.workingDirectory`：以字符串的形式保存当前工作目录的绝对规范路径
- `language`：此键值根据提供的语言代码设置 `Arara` 后续执行使用的语言，注意这项设置会被命令行选项 `--language` 覆盖
- `loop`：此键值规定 `Arara` 允许的可能的最大循环次数，注意这项设置会被命令行选项 `--max-loops` 覆盖
- `verbose`：此键值规定 `Arara` 是否使用详细模式作为默认模式，它会被 `--verbose` 命令行选项覆盖和被 `--silent` 选项重写
- `logging`：此键激活或停用 arara 的日志特性作为默认行为，它会被 `--log` 命令行选项重写
- `header`：此键值规定 `Arara` 是否只从文件开头提取指令，它会被 `--whole-file` 命令行选项重写
- `logname`：此键值规定 `Arara` 日志文件的名称
- `preambles`：此键保存包含预定义序言的字符串映射，以便以后与 ``--preamble`` 选项一起使用，如
```yaml
preambles:
  twopdflatex: |
    % arara: pdflatex
    % arara: pdflatex
```
- `defaultPreambles`：此键值制定了在文件中和命令行中都没有指定指令和序言的情况下，`Arara` 应该使用的默认序言
- `prependPreambleIfDirectivesGiven`：此键允许指定一个布尔值，该值指示序言应该应用于所有文件还是仅应用于那些没有指令的文件。
- `filetypes`：此键指定 `Arara` 在搜索文件名时支持的文件类型列表和相应的指令查找方式
  - `extensions`：此键值指定文件扩展名列表
  - `pattern`：此键值指定文件名模式
  

