<template>
  <div :class="getEditorStyle.editorContainer">
    <div :class="getEditorStyle.menuDropdown.container">
      <sw-dropdown :classes="dropdownClasses">
        <div slot="activator">
          <svg
            :class="getEditorStyle.menuDropdown.activator"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
            ></path>
          </svg>
        </div>
        <editor-menu-bar v-slot="{ commands, isActive }" :editor="editor">
          <div :class="getEditorStyle.menuDropdown.menuContainer">
            <span
              :class="mobileMenuIconContainerStyle(isActive.bold())"
              @click="commands.bold"
            >
              <bold-icon :class="getEditorStyle.menuDropdown.icon" />
            </span>
            <span
              :class="mobileMenuIconContainerStyle(isActive.italic())"
              @click="commands.italic"
            >
              <italic-icon :class="getEditorStyle.menuDropdown.icon" />
            </span>
            <span
              :class="mobileMenuIconContainerStyle(isActive.strike())"
              @click="commands.strike"
            >
              <strikethrough-icon :class="getEditorStyle.menuDropdown.icon" />
            </span>
            <span
              :class="mobileMenuIconContainerStyle(isActive.underline())"
              @click="commands.underline"
            >
              <underline-icon :class="getEditorStyle.menuDropdown.icon" />
            </span>
            <span
              :class="mobileMenuIconContainerStyle(isActive.code())"
              @click="commands.code"
            >
              <coding-icon :class="getEditorStyle.menuDropdown.icon" />
            </span>
            <span
              :class="mobileMenuIconContainerStyle(isActive.paragraph())"
              @click="commands.paragraph"
            >
              <paragraph-icon :class="getEditorStyle.menuDropdown.icon" />
            </span>
            <span
              :class="
                mobileMenuIconContainerStyle(isActive.heading({ level: 1 }))
              "
              @click="commands.heading({ level: 1 })"
            >
              H1
            </span>
            <span
              :class="
                mobileMenuIconContainerStyle(isActive.heading({ level: 2 }))
              "
              @click="commands.heading({ level: 2 })"
            >
              H2
            </span>
            <span
              :class="
                mobileMenuIconContainerStyle(isActive.heading({ level: 3 }))
              "
              @click="commands.heading({ level: 3 })"
            >
              H3
            </span>
            <span
              :class="mobileMenuIconContainerStyle(isActive.bullet_list())"
              @click="commands.bullet_list"
            >
              <list-ul-icon :class="getEditorStyle.menuDropdown.icon" />
            </span>
            <span
              :class="mobileMenuIconContainerStyle(isActive.ordered_list())"
              @click="commands.ordered_list"
            >
              <list-icon :class="getEditorStyle.menuDropdown.icon" />
            </span>
            <span
              :class="mobileMenuIconContainerStyle(isActive.blockquote())"
              @click="commands.blockquote"
            >
              <quote-icon :class="getEditorStyle.menuDropdown.icon" />
            </span>
            <span
              :class="mobileMenuIconContainerStyle(isActive.code_block())"
              @click="commands.code_block"
            >
              <code-block-icon :class="getEditorStyle.menuDropdown.icon" />
            </span>
            <span
              :class="mobileMenuIconContainerStyle()"
              @click="commands.undo"
            >
              <undo-icon :class="getEditorStyle.menuDropdown.icon" />
            </span>
            <span
              :class="mobileMenuIconContainerStyle()"
              @click="commands.redo"
            >
              <redo-icon :class="getEditorStyle.menuDropdown.icon" />
            </span>
          </div>
        </editor-menu-bar>
      </sw-dropdown>
    </div>
    <editor-menu-bar
      v-slot="{ commands, isActive }"
      :editor="editor"
      :class="getEditorStyle.editorMenuBar"
    >
      <div :class="getEditorStyle.menuContainer">
        <span
          :class="getIconContainerStyle(isActive.bold())"
          @click="commands.bold"
        >
          <bold-icon :class="getEditorStyle.icon" />
        </span>
        <span
          :class="getIconContainerStyle(isActive.italic())"
          @click="commands.italic"
        >
          <italic-icon :class="getEditorStyle.icon" />
        </span>
        <span
          :class="getIconContainerStyle(isActive.strike())"
          @click="commands.strike"
        >
          <strikethrough-icon :class="getEditorStyle.icon" />
        </span>
        <span
          :class="getIconContainerStyle(isActive.underline())"
          @click="commands.underline"
        >
          <underline-icon :class="getEditorStyle.icon" />
        </span>
        <span
          :class="getIconContainerStyle(isActive.code())"
          @click="commands.code"
        >
          <coding-icon :class="getEditorStyle.icon" />
        </span>
        <span
          :class="getIconContainerStyle(isActive.paragraph())"
          @click="commands.paragraph"
        >
          <paragraph-icon :class="getEditorStyle.icon" />
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
          <list-ul-icon :class="getEditorStyle.icon" />
        </span>
        <span
          :class="getIconContainerStyle(isActive.ordered_list())"
          @click="commands.ordered_list"
        >
          <list-icon :class="getEditorStyle.icon" />
        </span>
        <span
          :class="getIconContainerStyle(isActive.blockquote())"
          @click="commands.blockquote"
        >
          <quote-icon :class="getEditorStyle.icon" />
        </span>
        <span
          :class="getIconContainerStyle(isActive.code_block())"
          @click="commands.code_block"
        >
          <code-block-icon :class="getEditorStyle.icon" />
        </span>
        <span :class="getIconContainerStyle()" @click="commands.undo">
          <undo-icon :class="getEditorStyle.icon" />
        </span>
        <span :class="getIconContainerStyle()" @click="commands.redo">
          <redo-icon :class="getEditorStyle.icon" />
        </span>
      </div>
    </editor-menu-bar>
    <editor-content
      ref="myEditor"
      :editor="editor"
      :class="getEditorStyle.editor"
    />
  </div>
</template>

<script>
import SwEditor from '../../themes/default/SwEditor'
import { installComponent, findByKey } from '../../helpers/utilities'
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
import SwDropdown from '../sw-dropdown/SwDropdown'
const { classes, variants } = SwEditor

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
    CodeBlockIcon,
    SwDropdown
  },
  props: {
    setEditor: {
      type: String,
      default: ''
    },
    classes: {
      type: Object,
      default: () => classes
    },
    variant: {
      type: String,
      required: false,
      default: null
    },
    variants: {
      type: Object,
      default: () => variants
    },
    dropdownClasses: {
      type: Object,
      default: () => {
        return {
          container: 'relative',
          activator: 'cursor-pointer',
          divider:
            'border-t border-solid border-gray-200 my-2 mx-0 overflow-hidden',
          itemContainer:
            'z-20 p-2 max-h-60 text-base text-left list-none rounded border-0 shadow bg-white text-black overflow-auto sw-scroll',
          item:
            'flex p-2 text-sm font-light text-left text-black bg-transparent rounded cursor-pointer none hover:bg-gray-200 whitespace-nowrap',
          itemIcon: 'w-5 h-5 mr-3 text-secondary'
        }
      }
    }
  },
  data() {
    return {
      editor: null
    }
  },
  computed: {
    getEditorStyle() {
      let style = findByKey(this.variant, this.variantsTheme)
      return { ...this.classesTheme, ...style }
    },
    classesTheme() {
      return this.$theme && this.$theme.SwEditor
        ? { ...this.classes, ...this.$theme.SwEditor.classes }
        : this.classes
    },
    variantsTheme() {
      return this.$theme && this.$theme.SwEditor
        ? { ...this.variants, ...this.$theme.SwEditor.variants }
        : this.variants
    }
  },
  watch: {
    setEditor(val) {
      if (!this.editor.focused) {
        this.editor.setContent(val, false)
      }
    }
  },
  destroyed() {
    if (this.editor) this.editor.destroy()
  },
  mounted() {
    this.initEditor()
  },
  methods: {
    initEditor() {
      this.editor = new Editor({
        disablePasteRules: true, // disable Markdown when pasting
        disableInputRules: true, // disable Markdown when typing
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
      setTimeout(() => {
        for (let i = 0; i < this.$refs.myEditor.$el.children.length; i++) {
          this.$refs.myEditor.$el.children[
            i
          ].className += ` ${this.getEditorStyle.proseMirror}`
        }
      }, 200)
    },
    getIconContainerStyle(state) {
      if (state) {
        return this.getEditorStyle.activeIconContainer
      }
      return this.getEditorStyle.iconContainer
    },
    mobileMenuIconContainerStyle(state) {
      if (state) {
        return this.getEditorStyle.menuDropdown.activeIconContainer
      }
      return this.getEditorStyle.menuDropdown.iconContainer
    }
  }
}
</script>
