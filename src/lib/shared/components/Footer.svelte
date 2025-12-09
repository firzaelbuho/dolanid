<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer class="mt-10 border-t border-base-300 bg-base-200">
	<div class="max-w-6xl mx-auto px-4 py-8 flex flex-col gap-4">

		<!-- BRAND -->
		<div>
			<h2 class="text-xl font-bold">Dolanid</h2>
			<p class="text-sm opacity-70 max-w-md">
				Platform arsip dan dokumentasi permainan tradisional Indonesia.
				Dibuat dengan semangat melestarikan budaya bermain Nusantara.
			</p>
		</div>

		<!-- LINKS GRID -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">

			<div class="flex flex-col gap-1">
				<span class="font-semibold mb-1">Navigasi</span>
				<a href="/static" class="link link-hover">Beranda</a>
				<a href="/map" class="link link-hover">Peta Permainan</a>
				<a href="/list" class="link link-hover">Daftar Permainan</a>
			</div>

			<div class="flex flex-col gap-1">
				<span class="font-semibold mb-1">Tentang</span>
				<a href="/about" class="link link-hover">Tentang Dolanid</a>
				<a href="/kontribusi" class="link link-hover">Kontribusi Data</a>
				<a href="/kontak" class="link link-hover">Kontak</a>
			</div>

			<div class="flex flex-col gap-1">
				<span class="font-semibold mb-1">Resource</span>
				<a class="link link-hover">Dokumentasi</a>
				<a class="link link-hover">Roadmap</a>
				<a class="link link-hover">Changelog</a>
			</div>

			<div class="flex flex-col gap-1">
				<span class="font-semibold mb-1">Sosial</span>
				<a class="link link-hover">Instagram</a>
				<a class="link link-hover">YouTube</a>
				<a class="link link-hover">GitHub</a>
			</div>

		</div>

		<!-- COPYRIGHT -->
		<div class="pt-4 border-t border-base-300 text-center text-xs opacity-70">
			© {year} Dolanid — Permainan Tradisional Indonesia
		</div>
	</div>
</footer>
