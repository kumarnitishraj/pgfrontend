import React from 'react'
import { Switch ,Route,Redirect} from 'react-router-dom';

import BookList from './container/BookList'
import BookDetail from './container/BookDetail'



class MainRouter extends React.Component{
    render(){
        return(
         <div>
            <Switch>
                <Route exact path="/" component={BookList} />
                <Route exact path="/detail/:id" component={BookDetail} />

            </Switch>
        </div>
        )
    }
}
    

export default MainRouter;