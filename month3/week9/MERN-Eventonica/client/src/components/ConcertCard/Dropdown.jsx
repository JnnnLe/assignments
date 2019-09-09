
// 
import faker from 'faker'
import _ from 'lodash'
import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const addressDefinitions = faker.definitions.address
const stateOptions = _.map(addressDefinitions.state, (state, index) => ({
  key: addressDefinitions.state_abbr[index],
  text: state,
  value: addressDefinitions.state_abbr[index],
}))

const DropdownExampleMultipleSearchSelection = () => {
  <Dropdown
  placeholder='State'
  fluid
  multiple
  search
  selection
  options={stateOptions} 
  />
  
  <div role="combobox" aria-expanded="false" class="ui fluid multiple search selection dropdown">
  <input
    type="text"
    aria-autocomplete="list"
    autocomplete="off"
    class="search"
    tabindex="0"
    value=""
  />
  <span class="sizer"></span>
  <div class="default text" role="alert" aria-live="polite" aria-atomic="true">State</div>
  <i aria-hidden="true" class="dropdown icon"></i>
  <div aria-multiselectable="true" role="listbox" class="menu transition">
    <div
      style="pointer-events:all"
      role="option"
      aria-checked="false"
      aria-selected="true"
      class="selected item"
    >
      <span class="text">Alabama</span>
    </div>
    <div
      style="pointer-events:all"
      role="option"
      aria-checked="false"
      aria-selected="false"
      class="item"
    >
      <span class="text">Alaska</span>
    </div>
    <div
      style="pointer-events:all"
      role="option"
      aria-checked="false"
      aria-selected="false"
      class="item"
    ></div> </div> </div>

    return (

      //   )
      // }
      
      
    )
}



export default DropdownExampleMultipleSearchSelection

//