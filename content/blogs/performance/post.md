---
title: "React Native Performance Tips from the Trenches"
author: "Laurent Kleering van Beerenbergh"
date: "2025-11-15"
description: "Practical performance optimization tips I learned while working on VGZ's React Native health platform."
ogImage: "/images/blogs/default-og.png"
tags: ["software", "react-native", "performance"]
---

Working on VGZ's health platform serving thousands of users taught me valuable lessons about React Native performance. Here are my top tips.

## 1. Memoization is Your Friend

Don't recreate functions on every render:

```typescript
// ❌ Bad
<TouchableOpacity onPress={() => handlePress(item.id)}>

// ✅ Good
const handleItemPress = useCallback(() => {
  handlePress(item.id);
}, [item.id]);

<TouchableOpacity onPress={handleItemPress}>
```

## 2. FlatList Optimization

Always use these props:

- `removeClippedSubviews={true}`
- `maxToRenderPerBatch={10}`
- `windowSize={5}`
- `getItemLayout` for fixed-height items

## 3. Image Optimization

Use `react-native-fast-image` for better caching and performance. Always specify dimensions.

## 4. Avoid Anonymous Functions in JSX

Create stable references with `useCallback`:

```typescript
const renderItem = useCallback(({ item }) => (
  <ListItem data={item} />
), []);
```

## 5. Profile Before Optimizing

Use React DevTools Profiler and Flipper to identify actual bottlenecks. Don't optimize prematurely.

## Real-World Impact

After implementing these techniques, we reduced:
- Initial render time by 40%
- Memory usage by 25%
- Frame drops during scrolling to near zero

## Conclusion

Performance optimization is about making smart choices early and measuring impact. These techniques have served me well across multiple production apps.

What are your favorite React Native performance tips? Let me know!
