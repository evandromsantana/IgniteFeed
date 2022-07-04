import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Evandro Santana" 
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur iure adipisci maxime totam, eligendi eaque voluptates. Non quae laudantium facere, illum dolores, eaque quaerat cum, ducimus ipsum debitis sed voluptatem?" 
          />
          <Post
            author="Aurora Macedo"
            content="Um novo post muito legal" 
          />
        </main>
      </div>      
    </div>    
  )
}

