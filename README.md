### WebView-StickForever

Make element truely Fixed in webview
使得页面某元素在 IOS webview 中真正 "Fixed"，提升用户体验

### Why use it?

Hybrid 页面开发中，为了提升用户体验，我们通常在 io s中使用 `-webkit-overflow-scrolling` 加速滚动。
与此同时我们不希望下面的某个 fixed 层受 webview 回弹的影响。

### Easy to use

**step 1 在容器外面包裹一个滚动层**

```html
<div id="scroll-body">
  <!-- your code -->
</div>        
```

**step 2 给滚动层设置加速样式**

```css
#scroll-body{
    width: 100%;
    position: absolute;
    height: 100%;
    bottom: 0;
    left: 0;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    
    /* your style */
    padding-bottom: 135px;
}
```

**step 3 启用 StickForever**

```javascript
StickForever(document.getElementById('scroll-body')).stick();
```
