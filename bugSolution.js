```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only when the count changes
    console.log('Component rendered:', count);
    return () => {
      console.log('Component unmounted');
    };
  }, [count]); // count is added to the dependency array

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```