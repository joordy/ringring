<script>
  import { url } from '@sveltech/routify'
</script>

<h1>This is my blog</h1>

<ul>
  <li><a href={$url('blog/foo')}>Foo</a></li>
  <li><a href={$url('blog/bar')}>Bar</a></li>
  <li><a href={$url('blog/lum')}>Lum</a></li>
</ul>
