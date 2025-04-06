
import EmbeddingComponent from './components/embedding';
import GEmbeddingComponent from './components/Gembedding';
import GPTEmbeddingComponent from './components/GPTembedding';
import Search from './components/Search';
import UploadDocument from './components/UploadDocument';
import WVEmbeddingComponent from './components/WVembedding';
export default function Home() {
  return (
<div className='flex p-4 gap-4'>

      <UploadDocument />
      <Search/>
      <EmbeddingComponent/>
      <GPTEmbeddingComponent/>
      <WVEmbeddingComponent/>
      <GEmbeddingComponent/>
</div>
  );
}
