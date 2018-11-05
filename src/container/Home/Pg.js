import React from 'react'
import { Grid, Row,Col} from 'react-bootstrap'
import { connect } from 'react-redux'

import UiCard from '../../components/UiComponent/Pg';
import Header from '../../components/Header';
import { PG_LIST_REQUEST } from '../../config/Constants';

class Home extends React.Component{
    
    constructor(props){
        super(props)
    }

    componentDidMount(){

        const { auth, getPgs } = this.props;
        let params = {
            userId: auth.data._id,
            token:auth.token
        }
        getPgs(params)
    }

    render(){
        const { auth, pg } = this.props;
    
        if(!auth.token){
            window.location.pathname='/'
        }

        return(
            <div className="home">
                <Header 
                    createButton={true}
                    onCreateClick = {()=>window.location.pathname='/add/pg'}
                />
                <div>
                    <UiCard pgList={pg.pgLists} />
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
	return {
        auth: state.auth,
        pg: state.pg
	};
};
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		getPgs: (params) => {
			dispatch({
                type: PG_LIST_REQUEST,
                params
            })
        },
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);