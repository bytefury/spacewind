<template>
  <div>
    <editor-menu-bar
      v-slot="{ commands, isActive }"
      :editor="editor"
      :class="classes.editorContainer"
    >
      <div :class="classes.menuContainer">
        <span
          :class="getIconContainerStyle(isActive.bold())"
          @click="commands.bold"
        >
          <bold-icon :class="classes.icon" />
        </span>
        <span
          :class="getIconContainerStyle(isActive.italic())"
          @click="commands.italic"
        >
          <italic-icon :class="classes.icon" />
        </span>
        <span
          :class="getIconContainerStyle(isActive.strike())"
          @click="commands.strike"
        >
          <strikethrough-icon :class="classes.icon" />
        </span>
        <span
          :class="getIconContainerStyle(isActive.underline())"
          @click="commands.underline"
        >
          <underline-icon :class="classes.icon" />
        </span>
        <span
          :class="getIconContainerStyle(isActive.code())"
          @click="commands.code"
        >
          <coding-icon :class="classes.icon" />
        </span>
        <span
          :class="getIconContainerStyle(isActive.paragraph())"
          @click="commands.paragraph"
        >
          <paragraph-icon :class="classes.icon" />
        </span>
        <span
          :class="getIconContainerStyle(isActive.heading({ level: 1 }))"
          @click="commands.heading({ level: 1 })"
        >
          H1
        </span>
        <span
          :class="getIconContainerStyle(isActive.heading({ level: 2 }))"
          @click="commands.heading({ level: 2 })"
        >
          H2
        </span>
        <span
          :class="getIconContainerStyle(isActive.heading({ level: 3 }))"
          @click="commands.heading({ level: 3 })"
        >
          H3
        </span>
        <span
          :class="getIconContainerStyle(isActive.bullet_list())"
          @click="commands.bullet_list"
        >
          <list-ul-icon :class="classes.icon" />
        </span>
        <span
          :class="getIconContainerStyle(isActive.ordered_list())"
          @click="commands.ordered_list"
        >
          <list-icon :class="classes.icon" />
        </span>
        <span
          :class="getIconContainerStyle(isActive.blockquote())"
          @click="commands.blockquote"
        >
          <quote-icon :class="classes.icon" />
        </span>
        <span
          :class="getIconContainerStyle(isActive.code_block())"
          @click="commands.code_block"
        >
          <code-block-icon :class="classes.icon" />
        </span>
        <span :class="getIconContainerStyle()" @click="commands.undo">
          <undo-icon :class="classes.icon" />
        </span>
        <span :class="getIconContainerStyle()" @click="commands.redo">
          <redo-icon :class="classes.icon" />
        </span>
      </div>
    </editor-menu-bar>
    <editor-content :editor="editor" :class="classes.editor" />
  </div>
</template>

<script>
// import SwButton from '../SwButton'
import SwEditor from '../../themes/default/SwEditor'
import { installComponent } from '../../helpers/utilities'
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  UnderlineIcon,
  BoldIcon,
  CodingIcon,
  ItalicIcon,
  ListIcon,
  ListUlIcon,
  ParagraphIcon,
  QuoteIcon,
  StrikethroughIcon,
  UndoIcon,
  RedoIcon,
  CodeBlockIcon
} from './icons/index'

import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History
} from 'tiptap-extensions'

const { classes } = SwEditor

export default {
  name: 'SwEditor',
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  components: {
    EditorContent,
    EditorMenuBar,
    UnderlineIcon,
    BoldIcon,
    CodingIcon,
    ItalicIcon,
    ListIcon,
    ListUlIcon,
    ParagraphIcon,
    QuoteIcon,
    StrikethroughIcon,
    UndoIcon,
    RedoIcon,
    CodeBlockIcon
  },
  props: {
    setEditor: {
      type: String,
      default: ''
    },
    classes: {
      type: Object,
      default: () => classes
    }
  },
  data() {
    return {
      editor: null
    }
  },
  watch: {
    setEditor(val) {
      if (!this.editor.focused) {
        this.editor.setContent(val, false)
      }
    }
  },
  beforeDestroy() {
    if (this.editor) this.editor.destroy()
  },
  mounted() {
    this.initEditor()
  },
  methods: {
    initEditor() {
      this.editor = new Editor({
        extensions: [
          new Blockquote(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new BulletList(),
          new OrderedList(),
          new ListItem(),
          new TodoItem(),
          new TodoList(),
          new Bold(),
          new Code(),
          new Italic(),
          new Link(),
          new Strike(),
          new Underline(),
          new History()
        ],
        content: ``,
        onUpdate: ({ getHTML }) => {
          const state = getHTML()
          this.$emit('input', state)
        }
      })
      this.editor.setContent(this.setEditor)
    },
    getIconContainerStyle(state) {
      if (state) {
        return this.classes.activeIconContainer
      }
      return this.classes.iconContainer
    }
  }
}
</script>