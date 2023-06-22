# Pixel Hotkeys
一款以像素画风展示组合键的 JavaScript 库。

## 部署
1. 引入 `PixelHotkeys.js` 文件和样式表 `pixel-hotkeys.css`。
2. 准备好键位精灵图（[keys.png](./res/img/keys.png)）、映射表（[img2keys.js](./res/data/img2keys.js)）和索引表（[index_keys.js](./res/data/index_keys.js)）。
3. 声明一个新的 `PixelHotkeys` 对象。
4. 通过 `setImage()` 方法导入键位精灵图地址。请注意：必须是绝对地址或样式表所在目录的相对地址。
5. 通过 `setMap()` 方法导入映射表。
6. 通过 `setIndex()` 方法导入索引表。
7. 通过 `getKeyStyle()` 方法获取样式表，并将其放置在合适的目录。
8. 完成。现在可以通过 `getKeyDOM()` 方法获取组合键 HTML 代码。

当前仓库为完整部署后的效果示例，您也可以直接下载此仓库。

## 类 PixelHotkeys
| 属性名 | 类型 | 默认值 | 描述 |
| - | - | - | - |
| name | String | 'pixel-hotkeys' | 对象名称，用于元素类名及选择器。 |
| images | String[] | [] | 已导入的键位精灵图。 |
| maps | Object[] | [] | 已导入的映射表。 |
| index | Object[] | [] | 通过导入索引表生成的反查表。 |

### setImage
导入键位精灵图。
| 参数名 | 类型 | 默认值 | 描述 |
| - | - | - | - |
| url | String | | 精灵图的绝对地址或样式表所在目录的相对地址。 |
| index | Number | -1 | 目标索引号，-1 代表自动获取索引号。 |

### setMap
导入映射表。
| 参数名 | 类型 | 默认值 | 描述 |
| - | - | - | - |
| data | Object | | 映射表。 |
| index | Number | -1 | 目标索引号，-1 代表自动获取索引号。 |

### setIndex
通过索引表生成反查表。
| 参数名 | 类型 | 默认值 | 描述 |
| - | - | - | - |
| data | Object | | 索引表。 |
| index | Number | -1 | 目标索引号，-1 代表自动获取索引号。 |

### _getPos
内部方法，用于获取键位坐标。

### getKeyStyle
生成对应每个按键贴图的样式表。

### getKeyDOM
获取组合键 HTML 代码。
| 参数名 | 类型 | 默认值 | 描述 |
| - | - | - | - |
| expression | String | | 表达式 |
| label | String | '' | 标签内容。当表达式中定义了标签内容时，该值将替代表达式中的标签内容。 |