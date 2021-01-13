<script context="module">
  export async function preload(page, session) {
    const { slug } = page.params

    const res = await this.fetch(`dashboard/${slug}.json`)

    if (res.status === 200) {
      const project = await res.json()
      return { project }
    }

    if (res.status === 404) {
      const { error } = await res.json()
      this.error(404, error)
    }
  }
</script>
