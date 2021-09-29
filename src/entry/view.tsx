import React from 'react'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'

import '@nokacreative/generic-react-form/dist/index.css'
import './styles.scss'

import { ROUTES } from '../assets/routes'
import { Basic } from '../pages/basic'
import { ArraySample } from '../pages/array'
import { StandaloneSample } from '../pages/standalone'
import { ConditionalSample } from '../pages/condition'
import { InputsSample } from '../pages/inputs'
import { RadioCheckboxSample } from '../pages/radioCheckbox'
import { TextareaSample } from '../pages/textarea'
import { DropdownSample } from '../pages/dropdown'
import { AttachmentSample } from '../pages/attachment'

export const Entry = () => (
  <Router basename="/">
    <div id="links">
      <p>Select the sample you would like to view:</p>
      <Link to={ROUTES.basic}>Overview</Link>
      <Link to={ROUTES.array}>Arrays</Link>
      <Link to={ROUTES.inputs}>Inputs</Link>
      <Link to={ROUTES.radioCheckbox}>Radios And Checkboxes</Link>
      <Link to={ROUTES.textareas}>Textareas</Link>
      <Link to={ROUTES.dropdowns}>Dropdowns</Link>
      <Link to={ROUTES.attachments}>Attachment Controls</Link>
      <Link to={ROUTES.conditional}>Conditional Configurations</Link>
      <Link to={ROUTES.standalone}>Standalone Controls</Link>
    </div>
    <main>
      <Switch>
        <Route path={ROUTES.basic} component={Basic} />
        <Route path={ROUTES.array} component={ArraySample} />
        <Route path={ROUTES.inputs} component={InputsSample} />
        <Route path={ROUTES.radioCheckbox} component={RadioCheckboxSample} />
        <Route path={ROUTES.textareas} component={TextareaSample} />
        <Route path={ROUTES.dropdowns} component={DropdownSample} />
        <Route path={ROUTES.attachments} component={AttachmentSample} />
        <Route path={ROUTES.conditional} component={ConditionalSample} />
        <Route path={ROUTES.standalone} component={StandaloneSample} />
      </Switch>
    </main>
  </Router>
)
