
import Search from './components/Search';
import UploadDocument from './components/UploadDocument';
export default function Home() {
  return (
<div className='flex p-4 gap-4'>

      <UploadDocument />
      <Search/>
      
</div>
  );
}
