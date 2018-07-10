import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from '@material-ui/core/Tooltip'
import Icon from '../Icon'
import { StyledBtn } from './Btn.style'

const Btn = props => {
  const content = (
    <StyledBtn
      disabled={props.disabled}
      size={props.size}
      aria-label={props['aria-label'] || ''}
      color="inherit"
      customColor={props.customColor || 'main'}
      onClick={props.onClick || (() => false)}>
      <Icon id="btnIcon" color={props.color || 'inherit'} name={props.icon} size="xl" />
    </StyledBtn>
  )

  return (
    props.tooltip
      ? <Tooltip id="tooltip-top" title={props.tooltip} placement="top"><div>{content}</div></Tooltip>
      : content
  )
}

Btn.propTypes = {
  icon: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  tooltip: PropTypes.string,
}

export default Btn
