import React from 'react'
import TvcLoginComp from './TvcLoginComp';
import TvcLogoutComp from './TvcLogoutComp';

export default function TvcLoginControl(props) {
    var isLoggedIn = props.isLoggedIn;
    var tvcLoginControl = isLoggedIn?<TvcLoginComp />: <TvcLogoutComp />;
  return (
    <div>
      {tvcLoginControl}
    </div>
  )
}