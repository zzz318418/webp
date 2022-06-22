import { BrowserRouter ,Switch,Route} from 'react-router-dom';
import Header from'./Header';
import Signin from'./pages/Signin';
import Posts from './pages/Posts';
import NewPost from './pages/NewPost';
import Post from'./pages/Post';
import './App.css';
//import myMenu from'./compent/myMenu';
import Topics from './compent/Topics';
function App() {
    return(
        <body className="App">
    <BrowserRouter >
        <Header/>
        <Switch>
            <Route path="/" exact>
            <Posts/>
            </Route>
            <Route path="/signin" exact>
                <Signin/> 
            </Route>
            <Route path="/newpost" exact>
                <NewPost/>
            </Route>  
            <Route path="/posts/:postId" exact>
                <Post></Post>
            </Route>  
            <Route path="/mem" exact>
                個人資訊還沒做
            </Route>  
        </Switch>
    </BrowserRouter>
        </body>
    );
}
export default App;