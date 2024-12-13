```javascript
import Link from 'next/link';
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();

  const handleAboutClick = () => {
    router.push('/about');
  };

  return (
    <div>
      <button onClick={handleAboutClick}>About Us</button>
    </div>
  );
}

export default MyComponent;
```