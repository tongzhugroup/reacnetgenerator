(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{206:function(a,e,t){"use strict";t.r(e);var r=t(0),n=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"引用和联系方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引用和联系方式"}},[a._v("#")]),a._v(" 引用和联系方式")]),a._v(" "),t("p",[a._v("ReacNetGenerator: an Automatic Reaction Network Generator for Reactive Molecular Dynamic Simulations, 2019, doi: "),t("a",{attrs:{href:"https://dx.doi.org/10.26434/chemrxiv.7421534",target:"_blank",rel:"noopener noreferrer"}},[a._v("10.26434/chemrxiv.7421534"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("jinzhe.zeng@rutgers.edu (Jinzhe Zeng), tzhu@lps.ecnu.edu.cn (Tong Zhu)")]),a._v(" "),t("h1",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),t("p",[a._v("在"),t("a",{attrs:{href:"https://github.com/tongzhugroup/reacnetgenerator/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("Releases"),t("OutboundLink")],1),a._v("下载reacnetgenerator.zip。接着选择一项安装ReacNetGenerator：")]),a._v(" "),t("h2",{attrs:{id:"构建conda包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建conda包"}},[a._v("#")]),a._v(" 构建conda包")]),a._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://mirror.tuna.tsinghua.edu.cn/help/anaconda/",target:"_blank",rel:"noopener noreferrer"}},[a._v("从清华大学开源软件镜像站下载并安装 Anaconda 或 Miniconda"),t("OutboundLink")],1),a._v(" ；")]),a._v(" "),t("li",[a._v("解压reacnetgenerator.zip，并在ReacNetGenerator主目录编译：")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/\nconda build conda/recipe\nconda "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" reacnetgenerator --use-local\n")])])]),t("h2",{attrs:{id:"构建docker镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建docker镜像"}},[a._v("#")]),a._v(" 构建Docker镜像")]),a._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://mirror.tuna.tsinghua.edu.cn/help/docker-ce/",target:"_blank",rel:"noopener noreferrer"}},[a._v("安装Docker"),t("OutboundLink")],1),a._v("；")]),a._v(" "),t("li",[a._v("解压reacnetgenerator.zip，并在ReacNetGenerator主目录编译：")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker build "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" -t njzjz/reacnetgenerator\ndocker run njzjz/reacnetgenerator reacnetgenerator -h\n")])])]),t("h1",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[a._v("#")]),a._v(" 使用")]),a._v(" "),t("h2",{attrs:{id:"命令行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令行"}},[a._v("#")]),a._v(" 命令行")]),a._v(" "),t("p",[a._v("ReacNetGenerator可以处理任意类型含有原子坐标的轨迹文件，例如LAMMPS dump文件，可以通过在 LAMMPS 中执行dump 1 all custom 100 dump.reaxc id type x y z来获得：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("reacnetgenerator --dump -i dump.reaxc -a C H O\n")])])]),t("p",[a._v("其中，C、H、O 是轨迹中的原子种类。软件将自动生成"),t("a",{attrs:{href:"/report.html?jdata=https%3A%2F%2Fgist.githubusercontent.com%2Fnjzjz%2Fe9a4b42ceb7d2c3c7ada189f38708bf3%2Fraw%2F83d01b9ab1780b0ad2d1e7f934e61fa113cb0f9f%2Fmethane.json",target:"_blank"}},[a._v("分析结果")]),a._v("。")]),a._v(" "),t("p",[a._v("软件也可以处理含有键级信息的文件，例如LAMMPS键级文件：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("reacnetgenerator -i bonds.reaxc -a C H O\n")])])]),t("p",[a._v("运行以下命令查看帮助：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("reacnetgenerator -h\n")])])]),t("h2",{attrs:{id:"图形界面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#图形界面"}},[a._v("#")]),a._v(" 图形界面")]),a._v(" "),t("p",[a._v("你可以打开 ReacNetGenerator 的图形界面：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("reacnetgeneratorgui\n")])])]),t("h1",{attrs:{id:"荣誉"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#荣誉"}},[a._v("#")]),a._v(" 荣誉")]),a._v(" "),t("ul",[t("li",[a._v("2019年（第十一届）上海市大学生计算机应用能力大赛一等奖")]),a._v(" "),t("li",[a._v("2019年（第12届）中国大学生计算机设计大赛一等奖")])])])}),[],!1,null,null,null);e.default=n.exports}}]);