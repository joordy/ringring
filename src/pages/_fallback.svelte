<script>
  import { route } from '@sveltech/routify'
  console.log('route', $route)
</script>

<h1>404</h1>
<h2>Not found</h2>
<p>The path {$route.leftover} is not found.</p>
