<template>
  <div>
    <header>
      <router-link to="/"
        ><button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            focusable="false"
            width="1.5em"
            height="1.5em"
            style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 512 425"
          >
            <path
              d="M321.94 98L158.82 237.78a24 24 0 0 0 0 36.44L321.94 414c15.57 13.34 39.62 2.28 39.62-18.22v-279.6c0-20.5-24.05-31.56-39.62-18.18z"
              fill="#fff"
            />
          </svg></button
      ></router-link>
      <div class="label path">{{ path }}/index.html</div>

      <router-link :to="{ name: 'Kata', params: { id: id, mode: 'mobile' } }">
        <button
          :class="{
            active: mode == 'mobile',
          }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            focusable="false"
            width="1.5em"
            height="1.5em"
            style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 1v14h16V1H0zm1 3h6.5v10H1V4zm14 10H8.5V4H15v10zm0-11h-1V2h1v1z"
            />
          </svg>
        </button>
      </router-link>
      <router-link :to="{ name: 'Kata', params: { id, mode: 'desktop' } }">
        <button
          :class="{
            active: mode == 'desktop',
          }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            focusable="false"
            width="1.5em"
            height="1.5em"
            style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 1v14h16V1H0zm14 1h1v1h-1V2zm1 2v4.5H1V4h14zM1 14V9.5h14V14H1z"
            />
          </svg>
        </button>
      </router-link>
      <router-link :to="{ name: 'Kata', params: { id, mode: 'target' } }">
        <button
          :class="{
            active: mode == 'target',
          }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            focusable="false"
            width="1.5em"
            height="1.5em"
            style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 16 16"
          >
            <g>
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7z"
              />
            </g>
          </svg>
        </button>
      </router-link>
      <router-link :to="{ name: 'Kata', params: { id, mode: 'yours' } }">
        <button
          :class="{
            active: mode == 'yours',
          }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            focusable="false"
            width="1.3em"
            height="1.3em"
            style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 512 512"
          >
            <path
              d="M290.74 93.24l128.02 128.02l-277.99 277.99l-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22l277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55l128.02 128.02l56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"
            />
          </svg>
        </button>
      </router-link>
      <router-link :to="{ name: 'Kata', params: { id, mode: 'compare' } }">
        <button
          :class="{
            active: mode == 'compare',
          }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            focusable="false"
            width="1.5em"
            height="1.5em"
            style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              d="M10 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2V1h-2v2zm0 15H5l5-6v6zm9-15h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </button>
      </router-link>
    </header>
    <div class="previews" :class="previewClass">
      <div class="preview preview-target">
        <div class="overlay">
          {{ mode == "compare" ? "Target / Yours" : "Target" }}
        </div>
        <iframe :src="`${path}/solution.html`" frameborder="0"></iframe>
      </div>
      <div class="preview preview-yours">
        <div class="overlay" v-if="mode != 'compare'">Yours</div>
        <iframe :src="`${path}/index.html`" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    path() {
      return `/katas/${this.category}/${this.id}`;
    },
    previewClass() {
      const modes = {
        mobile: {
          mobile: true,
        },
        desktop: {
          desktop: true,
        },
        target: {
          target: true,
        },
        yours: {
          yours: true,
        },
        compare: {
          compare: true,
        },
      };
      return modes[this.mode];
    },
  },
  props: {
    id: {
      type: String,
      reqired: true,
    },
    category: {
      type: String,
      required: true,
    },
    mode: {
      type: String,
      default: "mobile",
    },
  },
};
</script>

<style scoped>
iframe {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mobile .preview {
  width: 50%;
  min-width: 300px;
  min-height: 800px;
  flex-grow: 1;
}

.desktop .preview {
  width: 100%;
  height: 50%;
}

.target .preview,
.yours .preview {
  height: 100%;
  width: 100%;
}

.target .preview-yours {
  display: none;
}

.yours .preview-target {
  display: none;
}

.compare .preview-target {
  width: 100%;
  height: 100%;
}
.compare .preview-yours {
  position: absolute;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
}

.preview {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
}

.previews {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  height: calc(100vh - 2rem);
  overflow: auto;
}

.previews.desktop {
  flex-direction: column;
}

header {
  height: 1rem;
  top: 0;
  z-index: 20;
  display: flex;
  height: 2rem;
  background-color: #111;
}

header button {
  height: 100%;
  background: transparent;
  color: #bbb;

  outline: none;
  border: none;
  cursor: pointer;
  border: none;
}

header > button:last-of-type {
  border-right-width: 1px;
}

header button:hover {
  background-color: #333;
}

header .label {
  color: white;
  font-size: 0.9rem;
  display: flex;
  font-weight: 700;
  align-items: center;
  margin: 0 0.5rem;
}

header .path {
  color: #ddd;
  font-weight: 400;
  font-size: 0.75rem;
}

header button.active {
  color: white;

  text-decoration: underline;
}

header button svg {
  fill: #bbb;
}
header button.active svg {
  fill: white;
}

h2 {
  font-size: 1rem;
  margin: 0;
  text-transform: uppercase;
}
</style>
