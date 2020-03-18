import React from 'react'
import Banner from '../components/Banner'
import LinkSection from '../components/LinkSection'
import Footer from '../components/Footer'

class Main extends React.Component {
    render(){
        return(
            <div>
                <Banner />
                <div className="wrapper">
                    <LinkSection />
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Main