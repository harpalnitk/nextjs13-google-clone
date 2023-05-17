// Layout file for web and image search pages

import SearchHeader from '@/components/SearchHeader'
import './../globals.css';

// charset and viewport meta tags are added by default 
//favicon is also added automatically
export const metadata = {
  title: 'Results page',
  description: 'Google Clone project using nextjs 13',
}

export default function SearchLayout({ children }) {
  return (
    <div>
        <SearchHeader/>
        {children}      
    </div>
  )
}