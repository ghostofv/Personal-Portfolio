import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

export default function NotFound() {
  return (
    <>
      <PageHero 
        tag="Error 404"
        titlePrefix="Page Not"
        titleHighlight="Found"
        description="The requested page does not exist or has been moved."
      />
      <div className="section-wrap" style={{ paddingTop: 0, textAlign: 'center' }}>
        <Link to="/" className="btn btn-primary"><span>← Return Home</span></Link>
      </div>
    </>
  );
}
