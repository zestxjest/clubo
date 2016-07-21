import * as React from 'react';
import {connect} from 'react-redux';
import {TopicRowProps} from '../components/TopicRow';
import {ConnectedTopicList, TopicListProps} from '../components/TopicList';
import {NavBar} from '../components/NavBar';

export interface AppProps {
    dispatch: any
}

class App extends React.Component<AppProps, any>{
    render() {
        
        return (
            <div>
                <NavBar></NavBar>
                <section className='content-wrap'>
                    <div className='containter'>
                        <div className='row'>
                            <main className='col-md-9 main-content'>
                                <ConnectedTopicList></ConnectedTopicList>
                            </main>
                            <aside className='col-md-3 sidebar'>
                                <div className="panel panel-default">
                                    <div className="panel-heading">Panel heading without title</div>
                                    <div className="panel-body">Panel content</div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state: any, dispatch: any): AppProps => ({
    dispatch: dispatch
});

export const ConnectedApp = connect(mapStateToProps)(App);