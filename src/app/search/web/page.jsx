// every page has a dynamic option that can be exported

// export const dynamic = 'auto'   //default

// if we change it to

// export const dynamic = 'force-dynamic'  // SSR like getServerSideProps

// i.e. it will always use SSR without caching (always fetch latest data)

// if we change to 

// export const dynamic = 'force-static'  //SSG  getStaticProps
// caches the page indefinitely

// if we change to

// export const revalidate = 6900 // ISR




export const dynamic='force-dynamic';


//this page is server side
//in next12 we used getServerSideProps()
import Link from "next/link";
import WebSearchResults from "@/components/WebSearchResults";

export default async function WebSearchPage({searchParams}) {
 
 const startIndex= searchParams.start || '1';
  // minimum 2s wait between cosecutive requests
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_SEARCH_API_KEY}&cx=${process.env.GOOGLE_SEARCH_CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`);
  
  //console.log('response', res);
  if(!res.ok){
    throw new Error('Something went wrong!');
  }

  const data = await res.json();

  const results= data.items;

if(!results){
  return <div className='flex flex-col justify-center items-center pt-10'>
    <h1 className='text-3xl mb-4'>No results found</h1>
      <p className='text-lg'>Try searching for something else or go back to the homepage {" "}
        <Link href='/' className='text-blue-500'>
        Home
        </Link>
      </p>
    </div>
}
  
return <>{results && <WebSearchResults results={data} />}</>;
}
