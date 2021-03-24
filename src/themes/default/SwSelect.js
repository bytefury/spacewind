export default {
  classes: {
    baseSelectContainer:
      'base-select multiselect min-h-10 box-content block relative w-full text-left',
    activeBaseSelectContainer: 'multiselect--active z-10',
    disabledBaseSelectContainer: 'pointer-events-none opacity-50',
    multiSelect:
      'multiselect__select h-10 m-0 py-1 px-2 right-0 no-underline text-center cursor-pointer leading-5 block absolute box-border w-8',
    disabledMultiSelect: 'bg-gray-200 text-gray-400',
    multiSelectTags:
      'multiselect__tags min-h-10 block pt-1.5 pr-10 pb-0 pl-2 rounded border border-solid text-sm ',
    multiSelectTagsDefaultColor: 'border-gray-300 bg-white',
    multiSelectTagsInvalid: 'border-danger bg-white',
    disabledMultiSelectTags: 'bg-gray-200 text-gray-400',
    multiselectTagsWrap: 'multiselect__tags-wrap inline',
    multiselectTag:
      'multiselect__tag relative inline-block pt-1 pr-6 pb-1 pl-2 rounded mr-2 text-white leading-none my-0.5 whitespace-nowrap overflow-hidden max-w-full bg-primary-500',
    multiselectTagIcon:
      'multiselect__tag-icon cursor-pointer ml-2 absolute right-0 top-0 bottom-0 font-bold w-5 text-center leading-5 transition-all ease-in-out rounded hover:bg-primary-400',
    multiselectStrong: 'mb-2 leading-5 inline-block align-top',
    multiselectSpinner:
      'multiselect__spinner absolute w-12 h-8 bg-white block top-1/2',
    multiselectInput:
      'multiselect__input p-1 relative inline-block border-none leading-5 rounded pl-1 w-full box-border align-top text-sm outline-none',
    multiselectSingle:
      'multiselect__single relative inline-block border-none leading-5 rounded text-gray-800 w-full box-border align-top pl-1 pt-1 mb-2 text-sm',
    multiselectContentWrapper:
      'multiselect__content-wrapper z-10 absolute block bg-white w-full border border-solid border-gray-300 border-t-0 rounded-bl rounded-br',
    multiselectContent:
      'multiselect__content list-none inline-block p-0 m-0 min-w-full align-top overflow-y-auto',
    multiselectOption:
      'multiselect__option block p-3 no-underline leading-4 normal-case align-middle relative cursor-pointer whitespace-nowrap text-sm',
    multiselectElement: 'multiselect__element block'
  }
}
