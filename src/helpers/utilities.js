import merge from 'lodash/merge'

const installComponent = (Vue, theme = {}, component) => {
  const { props } = component

  Object.keys(theme).forEach(key => {
    const prop = {
      default: () => theme[key]
    }
    props[key] = prop
  })

  Vue.component(component.name, {
    ...component,
    ...{
      props
    }
  })
}

const getCurrentTheme = (CurrentTheme, componentName) => {
  let components = [
    {
      name: 'SwDropdownItem',
      themeName: 'SwDropdown'
    },
    {
      name: 'SwDropdownDivider',
      themeName: 'SwDropdown'
    },
    {
      name: 'SwTableComponent',
      themeName: 'SwTable'
    },
    {
      name: 'SwTableColumn',
      themeName: 'SwTable'
    },
    {
      name: 'Pagination',
      themeName: 'SwTable'
    }
  ]
  let index = components.findIndex(component => {
    return component.name == componentName
  })

  if (index >= 0) {
    return CurrentTheme[components[index].themeName]
  }

  return CurrentTheme[componentName]
}

const extendComponent = (
  Vue,
  CurrentTheme,
  componentName,
  components,
  defaultTheme,
  defaultOptions
) => {
  const themeSettings = getCurrentTheme(CurrentTheme, componentName)
  const themeDefaultSettings = defaultTheme[componentName]

  const newSettings = merge(themeDefaultSettings, themeSettings)

  let { props } = components[componentName]

  Object.keys(newSettings).forEach(key => {
    const prop = {
      default: () => newSettings[key]
    }
    props[key] = prop
  })

  return Vue.extend({
    ...components[componentName],
    ...{
      props,
      ...defaultOptions
    }
  })
}

const camelToKebab = string =>
  string
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
    .toLowerCase()

const findByKey = (variant, variants) => {
  for (const property in variants) {
    if (camelToKebab(property) == variant) {
      return variants[property]
    }
  }
}

export { installComponent, extendComponent, findByKey, camelToKebab }
