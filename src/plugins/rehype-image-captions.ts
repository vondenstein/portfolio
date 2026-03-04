import { visit } from "unist-util-visit"
import type { Root, Element } from "hast"

export default function rehypeFigureCaption() {
  return (tree: Root) => {
    visit(tree, "element", (node: Element, index, parent) => {
      if (
        node.tagName !== "img" ||
        !node.properties?.title ||
        !parent ||
        index === undefined
      )
        return

      const caption = String(node.properties.title)
      delete node.properties.title

      const figure: Element = {
        type: "element",
        tagName: "figure",
        properties: {},
        children: [
          node,
          {
            type: "element",
            tagName: "figcaption",
            properties: {},
            children: [{ type: "text", value: caption }],
          },
        ],
      }

      parent.children[index] = figure
    })
  }
}
