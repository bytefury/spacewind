export default {
  classes: {
    editorContainer: 'relative',
    editorMenuBar: 'editor-container md:flex hidden',
    menuContainer: 'flex flex-wrap space-x-1',
    icon: 'h-4 fill-current cursor-pointer',
    iconContainer: 'flex items-center justify-center h-8 w-8 hover:bg-gray-200',
    activeIconContainer:
      'bg-gray-300 flex items-center justify-center h-8 w-8 cursor-pointer',
    editor:
      'box-border w-full mt-2 text-sm leading-8 text-left bg-white editor__content relative',
    proseMirror: 'p-2',
    editorDropdownMenuContainer: 'flex justify-end md:hidden',
    menuDropdown: {
      container: 'flex justify-end md:hidden',
      activator: 'w-6 h-6',
      menuContainer: 'gap-3 grid grid-cols-4 w-48',
      iconContainer:
        'flex items-center justify-center h-8 w-8 hover:bg-gray-200',
      activeIconContainer:
        'bg-gray-300 flex items-center justify-center h-8 w-8 cursor-pointer',
      icon: 'h-4 fill-current cursor-pointer'
    }
  },
  variants: {
    headerEditor: {
      editorContainer: 'relative header-editior',
      editorMenuBar:
        'absolute w-full bg-white rounded-t top-0 border-gray-400 px-2 py-3 m-1 border-b editor-menu-bar md:flex hidden',
      menuContainer: 'flex space-x-1',
      icon: 'h-4 fill-current cursor-pointer',
      iconContainer:
        'flex items-center justify-center h-8 w-8 z-5 hover:bg-gray-200',
      activeIconContainer:
        'bg-gray-300 flex items-center justify-center h-8 w-8 cursor-pointer z-5',
      editor:
        'box-border w-full mt-2 text-sm leading-8 text-left bg-white editor__content',
      proseMirror: 'p-3 pt-2 md:pt-16'
    }
  }
}
