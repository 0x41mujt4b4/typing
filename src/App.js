import React from 'react';
import Text from './components/Text'
import Navbar from './components/Navbar'

let text = 'the quick brown fox jumps over the lazy dog.'
let randomWords = require('random-words')

const App = () => {
  console.log('from App')
  return (
    
    <>
      <Navbar />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* <!-- Replace with your content --> */}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
              <Text wordsList={randomWords(20)}/>
            </div>
          </div>
          {/* <!-- /End replace --> */}
        </div>
      </main>
    </>
  );
}


export default App;