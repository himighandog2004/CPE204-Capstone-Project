<!--
	3D Sphere Intersection by Konstantin Denerz
	https://codepen.io/konstantindenerz/pen/xxyZJpO
-->

<div class="mix-blend-mode"></div>

<div class="container">
	{#each { length: 6 }, i}
		{@const index = i + 1}
		<div class="item" style:--i={i}>
			<div class="surface" style:--i={index + i}></div>
			<div class="surface" style:--i={index * 2}></div>
			<div class="top" style:--i={index * 2 - 1}></div>
			<div class="left"></div>
		</div>
	{/each}

	<div class="ball-container">
		<div class="ball"></div>
	</div>
</div>

<style>	
	:root {
		--c1: #6eccee;
		--c2: #ffdc99;
		--c3: #e3a4d0;
		--c4: #d455ff;
		--radius: 18vmin;
		--item-offset: calc(360deg / 24);
		--circle-y: 20%;
		--border: 0.6vmin;
		--animation-duration: 4s;
		--glow: drop-shadow(0 0 6vmin oklch(1 0 0 / 19%));
	}

	@property --angle {
		syntax: '<angle>';
		inherits: true;
		initial-value: 0deg;
	}

	@keyframes angle {
		from {
			--angle: 360deg;
		}
		to {
			--angle: 0deg;
		}
	}

	@keyframes ball-container {
		0% {
			transform: translateZ(-40vmin);
			opacity: 0;
		}
		10% {
			opacity: 1;
		}
		50% {
			opacity: 1;
		}
		60% {
			transform: translateZ(40vmin);
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}

	:global(body) {
		display: grid;
		place-content: center;
		background: #1f2233;
	}

	.mix-blend-mode {
		position: absolute;
		inset: 0px;
		background: #1f2233;
		mix-blend-mode: plus-lighter;
		z-index: 10;
	}

	.container {
		--angle: 0deg;
		
		aspect-ratio: 1 / 1.2;
		width: 40vmin;
		position: relative;
		transform-style: preserve-3d;
		transform: rotateX(-45deg) rotateY(45deg);
		animation: angle var(--animation-duration) linear infinite;
	}

	.item {
		--gap: 10vmin;
		--gap-offset: calc(var(--i) - 3);

		position: absolute;
		inset: 0px;
		transform: translateZ(calc(var(--gap) * var(--gap-offset)));
		filter: var(--glow);
	}

	.surface {
		--angle-offset: calc(var(--i) * var(--item-offset));
		--diameter: calc(cos(calc(var(--angle) + var(--angle-offset))) * var(--radius));

		position: absolute;
		inset: 0px;

		background:
			radial-gradient(
				circle at 50% var(--circle-y),
				var(--c4) calc(var(--diameter) + var(--border)),
				var(--c4) calc(var(--diameter) + var(--border)),
				transparent var(--diameter)
			),
			linear-gradient(black, black),
			linear-gradient(
				45deg,
				var(--c1),
				var(--c3),
				var(--c2),
				var(--c1),
				var(--c4),
				var(--c3),
				var(--c2)
			);
		background-repeat: no-repeat;
		background-size:
			100% 100%,
			calc(100% - var(--border) * 2) calc(100% - var(--border) * 2),
			100%;
		background-position:
			50% 20%,
			var(--border) var(--border),
			0 0;

		mask: radial-gradient(
			circle at 50% var(--circle-y),
			transparent var(--diameter),
			black var(--diameter)
		);

		&:nth-child(2) {
			translate: 4vmin 5.7vmin;
		}
	}

	.top {
		--angle-offset: calc(var(--i) * var(--item-offset));
		--diameter: calc(cos(calc(var(--angle) + var(--angle-offset))) * var(--radius));

		height: 6vmin;
		position: absolute;
		inset: 0px;

		background:
			linear-gradient(black, black) no-repeat,
			linear-gradient(to right, var(--c1), var(--c3), var(--c2), var(--c1)) no-repeat;
		background-size:
			calc(100% - var(--border) * 2) calc(100% - var(--border) * 2),
			100%;
		background-position:
			var(--border) var(--border),
			0 0;

		mask: radial-gradient(
			calc(var(--diameter) * 0.86) at 50% calc(60% / cos(calc(var(--angle) + var(--angle-offset)))),
			transparent var(--diameter),
			black var(--diameter)
		);

		transform: skewX(36deg) translateX(2vmin);
	}

	.left {
		width: 4.5vmin;
		position: absolute;
		inset: 0px;

		background:
			linear-gradient(black, black) no-repeat,
			linear-gradient(to top, var(--c1), var(--c3), var(--c2), var(--c1)) no-repeat;
		background-size:
			calc(100% - var(--border) * 2) calc(100% - var(--border) * 2),
			100%;
		background-position:
			var(--border) var(--border),
			0 0;

		transform: skewY(55deg) translateY(2.9vmin);
	}

	.ball-container {
		display: grid;
		place-items: center;
		position: absolute;
		inset: 0px;
		transform: translateZ(-40vmin);
		animation: ball-container var(--animation-duration) linear infinite;
	}

	.ball {
		--diameter: 30vmin;
		--radius: calc(var(--diameter) / 2);
		--border: 1vmin;

		width: var(--diameter);
		aspect-ratio: 1;
		border-radius: 50%;
		box-shadow: 0 0 10vmin oklch(1 0 0 / 0.8%);
		filter: var(--glow);

		background:
			radial-gradient(
				var(--radius) var(--radius) at center,
				black calc(var(--radius) - var(--border)),
				transparent calc(var(--radius) - var(--border))
			),
			conic-gradient(
				var(--c1),
				var(--c3),
				var(--c2),
				var(--c4),
				var(--c3),
				var(--c1),
				var(--c2),
				var(--c1)
			);
		background-repeat: no-repeat;
		background-size: var(--bg-2), var(--bg-1);
		background-position: 50%;

		transform: rotateX(45deg) rotateY(45deg) translateY(-20vmin);
	}
</style>