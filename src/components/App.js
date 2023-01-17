import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar';
import WebsiteDescription from './WebsiteDescription';
import ScrollBody from './ScrollBody';
import ChuckNorrisAsideContent from './ChuckNorrisAsideContent';
import Footer from './Footer';


class App extends React.Component {
    render() {
        return (
            <>


            <header>

            <Navbar />
            <Hero />

            </header>

            <main>
                
            <WebsiteDescription />
            <ScrollBody />

            </main>

            <aside>
                
            <ChuckNorrisAsideContent />

            </aside>

            <footer>

            <Footer />

            </footer>
    
            
            </>
        )
    }
}

export default App;