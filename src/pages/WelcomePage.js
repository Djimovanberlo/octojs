import React from "react";
import { NavLink, Switch, Route, Link, useLocation  } from "react-router-dom";
import { useTransition, animated } from 'react-spring'
import { Beforeunload } from 'react-beforeunload';



const WelcomePage = () => {
  const A = () => (
    <div>
      <Link to="/input">Click to find out</Link>
    </div>
  )
  const location = useLocation()
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
  })
  return transitions.map(({ item: location, props, key }) => (
    <animated.div key={key} style={props}>
      <Beforeunload onBeforeunload={(event) => event.preventDefault()}>
      <h1>How well off are you?</h1>
      <Switch location={location}>
        <Route path="/" exact component={A}></Route>

      </Switch>
      </Beforeunload>
    </animated.div>
    
  ))
};

export default WelcomePage;
