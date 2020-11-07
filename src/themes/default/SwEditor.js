export default {
  classes: {
    editorContainer: 'relative',
    editorMenuBar: 'editor-container',
    menuContainer: 'flex flex-wrap space-x-1',
    icon: 'h-4 fill-current cursor-pointer',
    iconContainer: 'flex items-center justify-center h-8 w-8',
    activeIconContainer:
      'bg-gray-300 flex items-center justify-center h-8 w-8 cursor-pointer',
    editor:
      'box-border w-full mt-2 text-sm leading-8 text-left bg-white editor__content'
  },
  variants: {
    headerEditor: {
      editorContainer: 'relative header-editior',
      editorMenuBar:
        'absolute w-full.7 xl:w-full.8 bg-white rounded-t top-0 border-gray-400 px-2 py-3 z-10 m-1 border-b editor-menu-bar',
      menuContainer: 'flex flex-wrap space-x-1',
      icon: 'h-4 fill-current cursor-pointer',
      iconContainer: 'flex items-center justify-center h-8 w-8',
      activeIconContainer:
        'bg-gray-300 flex items-center justify-center h-8 w-8 cursor-pointer',
      editor:
        'box-border w-full mt-2 text-sm leading-8 text-left bg-white editor__content'
    }
  }
}
