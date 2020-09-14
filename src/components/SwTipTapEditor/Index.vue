<template>
  <div>
    <editor-menu-bar
      v-slot="{ commands, isActive }"
      :editor="editor"
      :class="classes.editorContainer"
    >
      <div :class="classes.menuContainer">
        <sw-button
          :class="getActiveClass(isActive.bold())"
          type="button"
          @click="commands.bold"
        >
          <bold-icon :class="classes.icon" />
        </sw-button>
        <sw-button
          :class="getActiveClass(isActive.italic())"
          type="button"
          @click="commands.italic"
        >
          <italic-icon :class="classes.icon" />
        </sw-button>
        <sw-button
          type="button"
          :class="getActiveClass(isActive.strike())"
          @click="commands.strike"
        >
          <strikethrough-icon :class="classes.icon" />
        </sw-button>
        <sw-button
          type="button"
          :class="getActiveClass(isActive.underline())"
          @click="commands.underline"
        >
          <underline-icon :class="classes.icon" />
        </sw-button>
        <sw-button
          type="button"
          :class="getActiveClass(isActive.code())"
          @click="commands.code"
        >
          <coding-icon :class="classes.icon" />
        </sw-button>
        <sw-button
          type="button"
          :class="getActiveClass(isActive.paragraph())"
          @click="commands.paragraph"
        >
          <paragraph-icon class="h-5 fill-white" />
        </sw-button>
        <sw-button
          type="button"
          :class="getActiveClass(isActive.heading({ level: 1 }))"
          @click="commands.heading({ level: 1 })"
        >
          H1
        </sw-button>
        <sw-button
          type="button"
          :class="getActiveClass(isActive.heading({ level: 2 }))"
          @click="commands.heading({ level: 2 })"
        >
          H2
        </sw-button>
        <sw-button
          type="button"
          :class="getActiveClass(isActive.heading({ level: 3 }))"
          @click="commands.heading({ level: 3 })"
        >
          H3
        </sw-button>
        <sw-button
          type="button"
          :class="getActiveClass(isActive.bullet_list())"
          @click="commands.bullet_list"
        >
          <list-ul-icon :class="classes.icon" />
        </sw-button>
        <sw-button
          type="button"
          :class="getActiveClass(isActive.ordered_list())"
          @click="commands.ordered_list"
        >
          <list-icon :class="classes.icon" />
        </sw-button>
        <sw-button
          type="button"
          :class="getActiveClass(isActive.blockquote())"
          @click="commands.blockquote"
        >
          <quote-icon :class="classes.icon" />
        </sw-button>
        <sw-button
          type="button"
          :class="getActiveClass(isActive.code_block())"
          @click="commands.code_block"
        >
          code
        </sw-button>
        <sw-button type="button" @click="commands.undo">
          <undo-icon :class="classes.icon" />
        </sw-button>
        <sw-button type="button" @click="commands.redo">
          <redo-icon :class="classes.icon" />
        </sw-button>
      </div>
    </editor-menu-bar>
    <editor-content :editor="editor" :class="classes.editor" />
  </div>
</template>

<script>
import SwButton from '../SwButton'
import SwTipTapEditor from '../../themes/default/SwTipTapEditor'
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
  RedoIcon
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

const { classes } = SwTipTapEditor

export default {
  components: {
    EditorContent,
    EditorMenuBar,
    SwButton,
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
    RedoIcon
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
    getActiveClass(state) {
      if (state) {
        return this.classes.activeButton
      }
      return ''
    }
  }
}
</script>
