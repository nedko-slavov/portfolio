# Portfolio

## Install and run

To setup the project run:

```
yarn
```

To run the development server run:

```
yarn dev
```

```json
"[html]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[json]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
```

## Folder Structure

Each folder contains a `_module.scss` master file that serves as an index exporting styles.

Main folders:

- **base:** definitions for the basic branding styles – colors, typography, form elements, buttons
- **components:** definitions for the specific UX components, also called patterns
- **lib:** our helper methods for responsive, grid definition, layer definition, code that changes less across projects
- **pages:** code for specific pages
- **themes:** code for the color themes
- **vendor:** code coming from 3rd party libraries

Example structure:

```
├── _admin-builder.scss
├── _main.scss
├── base
│   ├── _buttons.scss
│   ├── _colors.scss
│   ├── _forms.scss
│   ├── _module.scss
│   ├── _spacings.scss
│   ├── _tables.scss
│   └── _typography.scss
├── components
│   ├── _cards.scss # Code related to a reusable components
│   ├── _footer.scss
│   ├── _header.scss
│   ├── _module.scss
│   ├── _text.scss
│   └── _video.scss
├── lib
│   ├── _aspect-ratio.scss
│   ├── _grid.scss
│   ├── _layers.scss
│   ├── _module.scss
│   ├── _reset.scss
│   ├── _responsive.scss
│   └── _utils.scss
├── pages
│   ├── _checkout.scss # Code containing specifics for a page
│   └── _module.scss
├── themes
│   └── _module.scss
└── vendor
    ├── _module.scss
    └── _swiper.scss
```

## Naming CSS classes and nesting rules for SASS

We scope the different UX patterns with a parent class (eg. `section-title`, `site-header`, etc.). We nest no more than 3 levels inside.

We try to limit the styling of html tags without a class. This helps us change the markup without changing the styling.

**Bad**

```scss
.page-title {
  h1 {
    padding-bottom: 0.25em;
  }
  small {
    opacity: 0.4;
  }
}
```

**Good**

```scss
.page-title {
  .title {
    padding-bottom: 0.25em;
  }
  .sub-title {
    opacity: 0.4;
  }
}
```

The nesting rules are as follows:

1. Styles for any direct HTML descendants
1. Styles for classes, try to avoid a lot of nesting, try to gather all CSS classes on that level (if possible)
1. Pseudo-classes like `&:hover`
1. Responsive definitions

## CSS property order

For better reading we order the css properties in the following order:

```css
.selector {
  /* Display */
  display: inline-block;

  /* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;

  /* Box Model */
  width: 100px;
  height: 100px;
  padding: 10px;
  margin: 10px;
  border: 10px solid #333;
  overflow: hidden;
  box-sizing: border-box;

  /* Color */
  background-color: #000;
  color: #fff;

  /* Text */
  font-size: 16px;
  line-height: 1.4;
  text-align: right;
  font-family: sans-serif;

  /* Other */
  cursor: pointer;
  @include mixin-name($black, $base-section-space);
}
```

## Mobile-first

We do responsive in a mobile-first manner. This means that the basic definitions (those, without media query) should be the mobile styles. For desktop (if needed), we add `@include bp($bp-desktop)` blocks and define the rules for extending the display to larger sizes.

## How responsive works

Please check the breakpoint definitions in `lib/_responsive.scss`, then in your SASS code you can use the following:

```sass
.button-wrapper {
  .btn-primary,
  .btn-secondary {
    margin-bottom: var(--spacing-sm);
  }

  @include bp($bp-desktop) {
    display: flex;
    align-items: center;

    .btn-primary,
    .btn-secondary {
      margin-right: var(--spacing-sm);

      &:last-of-type {
        margin-right: 0;
      }
    }
  }
}
```

## Vertical spacing and approach to padding/margins

Whenever possible rely on the spacings variables (defined in `base/_spacings.scss`) or the gutter (defined in `lib/_grid.scss`). If you need to introduce a new kind of spacing, derive it from these by using the CSS `calc()` function.

Example:

```css
.meta {
  margin-top: calc(var(--spacing-sm) / 2);
}
```

Pixels can be used for icons/logos or other imagery inserted through CSS backgrounds, for all the other cases metric values will be regarded as an exception. Write code less that relies less on exceptions and more on rules.

## Styleguide rules

Here's a list of other guidelines:

### Keep multiple classes on separate lines

**Bad**

```
.percentage, .stat {
  color: var(--success);
}
```

**Good**

```css
.percentage,
.stat {
  color: var(--success);
}
```

### Reduce nesting of classes to max 3 levels

**Bad**

```scss
.cards {
  .card {
    .card-header {
      .title {
      }
    }

    .card-footer {
    }
  }
}
```

**Good**

```scss
.cards {
  .card {
  }

  .card-header {
    .title {
    }
  }

  .card-footer {
  }
}
```
