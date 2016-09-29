'use strict';

define('hoppr-ui/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('hoppr-ui/tests/components/fusion-chart.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/fusion-chart.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/fusion-chart.js should pass jshint.\ncomponents/fusion-chart.js: line 6, col 19, Label \'charttype\' on  statement.\ncomponents/fusion-chart.js: line 6, col 19, Expected an assignment or function call and instead saw an expression.\ncomponents/fusion-chart.js: line 7, col 19, Label \'renderat\' on  statement.\ncomponents/fusion-chart.js: line 7, col 19, Expected an assignment or function call and instead saw an expression.\ncomponents/fusion-chart.js: line 8, col 16, Label \'myData\' on  statement.\ncomponents/fusion-chart.js: line 8, col 16, Expected an assignment or function call and instead saw an expression.\ncomponents/fusion-chart.js: line 21, col 9, \'FusionCharts\' is not defined.\ncomponents/fusion-chart.js: line 22, col 36, \'FusionCharts\' is not defined.\n\n8 errors');
  });
});
define('hoppr-ui/tests/components/hoppr-grid.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/hoppr-grid.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/hoppr-grid.js should pass jshint.\ncomponents/hoppr-grid.js: line 7, col 5, \'height\' is defined but never used.\ncomponents/hoppr-grid.js: line 8, col 5, \'width\' is defined but never used.\n\n2 errors');
  });
});
define('hoppr-ui/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('hoppr-ui/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('hoppr-ui/tests/helpers/ember-i18n/test-helpers', ['exports', 'ember'], function (exports, _ember) {

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  _ember['default'].Test.registerHelper('t', function (app, key, interpolations) {
    var i18n = app.__container__.lookup('service:i18n');
    return i18n.t(key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  _ember['default'].Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = app.testHelpers.t(key, interpolations);

    assertTranslation(element, key, text);
  });

  var assertTranslation = (function () {
    if (typeof QUnit !== 'undefined' && typeof ok === 'function') {
      return function (element, key, text) {
        ok(find(element + ':contains(' + text + ')').length, 'Found translation key ' + key + ' in ' + element);
      };
    } else if (typeof expect === 'function') {
      return function (element, key, text) {
        var found = !!find(element + ':contains(' + text + ')').length;
        expect(found).to.equal(true);
      };
    } else {
      return function () {
        throw new Error("ember-i18n could not find a compatible test framework");
      };
    }
  })();
});
define('hoppr-ui/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'hoppr-ui/tests/helpers/start-app', 'hoppr-ui/tests/helpers/destroy-app'], function (exports, _qunit, _hopprUiTestsHelpersStartApp, _hopprUiTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _hopprUiTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _hopprUiTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('hoppr-ui/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('hoppr-ui/tests/helpers/resolver', ['exports', 'hoppr-ui/resolver', 'hoppr-ui/config/environment'], function (exports, _hopprUiResolver, _hopprUiConfigEnvironment) {

  var resolver = _hopprUiResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _hopprUiConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _hopprUiConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('hoppr-ui/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('hoppr-ui/tests/helpers/start-app', ['exports', 'ember', 'hoppr-ui/app', 'hoppr-ui/config/environment'], function (exports, _ember, _hopprUiApp, _hopprUiConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _hopprUiConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _hopprUiApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('hoppr-ui/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('hoppr-ui/tests/initializers/i18n.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | initializers/i18n.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/i18n.js should pass jshint.');
  });
});
define('hoppr-ui/tests/integration/components/fusion-chart-test', ['exports', 'ember-qunit', 'hoppr-ui/types/chartoptions', 'hoppr-ui/types/chartdata'], function (exports, _emberQunit, _hopprUiTypesChartoptions, _hopprUiTypesChartdata) {

  (0, _emberQunit.moduleForComponent)('fusion-chart', 'Integration | Component | fusion chart', {
    integration: true
  });

  (0, _emberQunit.test)('chart renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    var options = _hopprUiTypesChartoptions['default'].create({

      height: '500',
      width: '500',
      charttype: "doughnut2d",
      renderat: "chartcontainer",
      paletteColors: "FF5904,0372AB,FF0000"
    });

    var myData = _hopprUiTypesChartdata['default'].create({
      data: [{
        "label": "Group",
        "value": "880000"
      }, {
        "label": "Transient",
        "value": "730000"
      }, {
        "label": "others",
        "value": "590000"
      }]
    });

    this.set('varOptions', options);
    this.set('varData', myData);

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.8.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 47
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'fusion-chart', [], ['data', ['subexpr', '@mut', [['get', 'varData', ['loc', [null, [1, 20], [1, 27]]], 0, 0, 0, 0]], [], [], 0, 0], 'config', ['subexpr', '@mut', [['get', 'varOptions', ['loc', [null, [1, 35], [1, 45]]], 0, 0, 0, 0]], [], [], 0, 0]], ['loc', [null, [1, 0], [1, 47]]], 0, 0]],
        locals: [],
        templates: []
      };
    })()));
    assert.equal(this.$().text().trim().match('Transient'));
    assert.equal(this.$().text().trim().match('Group'));
    assert.equal(this.$().text().trim().match('others'));
  });
});
define('hoppr-ui/tests/integration/components/fusion-chart-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/fusion-chart-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/fusion-chart-test.js should pass jshint.');
  });
});
define('hoppr-ui/tests/integration/components/hoppr-grid-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('hoppr-grid', 'Integration | Component | hoppr grid', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.8.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 14
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'hoppr-grid', ['loc', [null, [1, 0], [1, 14]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.8.1',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.8.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'hoppr-grid', [], [], 0, null, ['loc', [null, [2, 4], [4, 19]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('hoppr-ui/tests/integration/components/hoppr-grid-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/hoppr-grid-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/hoppr-grid-test.js should pass jshint.');
  });
});
define('hoppr-ui/tests/integration/pod/components/dashboard/dailyrevenue/grid-container/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('dashboard/dailyrevenue/grid-container', 'Integration | Component | dashboard/dailyrevenue/grid container', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.8.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 41
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'dashboard/dailyrevenue/grid-container', ['loc', [null, [1, 0], [1, 41]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));
    assert.ok(this.$().text().trim().match('GRID!!'));
  });
});
define('hoppr-ui/tests/integration/pod/components/dashboard/dailyrevenue/grid-container/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/pod/components/dashboard/dailyrevenue/grid-container/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pod/components/dashboard/dailyrevenue/grid-container/component-test.js should pass jshint.');
  });
});
define('hoppr-ui/tests/integration/pod/components/dashboard/dailyrevenue/stats-container/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('dashboard/dailyrevenue/stats-container', 'Integration | Component | dashboard/dailyrevenue/stats container', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.8.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 57
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'dashboard/dailyrevenue/stats-container', [], ['collapsed', true], ['loc', [null, [1, 0], [1, 57]]], 0, 0]],
        locals: [],
        templates: []
      };
    })()));
    assert.ok(this.$().text().trim().match('Collapsed'));

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.8.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 58
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'dashboard/dailyrevenue/stats-container', [], ['collapsed', false], ['loc', [null, [1, 0], [1, 58]]], 0, 0]],
        locals: [],
        templates: []
      };
    })()));
    assert.ok(this.$().text().trim().match('Expanded'));
  });
});
define('hoppr-ui/tests/integration/pod/components/dashboard/dailyrevenue/stats-container/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/pod/components/dashboard/dailyrevenue/stats-container/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pod/components/dashboard/dailyrevenue/stats-container/component-test.js should pass jshint.');
  });
});
define('hoppr-ui/tests/integration/pod/components/dashboard/dailyrevenue/tab-list/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('dashboard/dailyrevenue/tab-list', 'Integration | Component | dashboard/dailyrevenue/tab list', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.8.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 35
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'dashboard/dailyrevenue/tab-list', ['loc', [null, [1, 0], [1, 35]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));
    assert.ok(this.$().text().trim().match('Summary View'));
    assert.ok(this.$().text().trim().match('Rooms Data'));
    assert.ok(this.$().text().trim().match('F&B Data'));
    assert.ok(this.$().text().trim().match('Other Income'));
  });
});
define('hoppr-ui/tests/integration/pod/components/dashboard/dailyrevenue/tab-list/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/pod/components/dashboard/dailyrevenue/tab-list/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pod/components/dashboard/dailyrevenue/tab-list/component-test.js should pass jshint.');
  });
});
define('hoppr-ui/tests/integration/pod/components/dashboard/dailyrevenue/tab-toolbar/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('dashboard/dailyrevenue/tab-toolbar', 'Integration | Component | dashboard/dailyrevenue/tab toolbar', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.8.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 38
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'dashboard/dailyrevenue/tab-toolbar', ['loc', [null, [1, 0], [1, 38]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.ok(this.$().text().trim().match('Toolbar'));
  });
});
define('hoppr-ui/tests/integration/pod/components/dashboard/dailyrevenue/tab-toolbar/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/pod/components/dashboard/dailyrevenue/tab-toolbar/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pod/components/dashboard/dailyrevenue/tab-toolbar/component-test.js should pass jshint.');
  });
});
define('hoppr-ui/tests/locales/en/config.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | locales/en/config.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/config.js should pass jshint.');
  });
});
define('hoppr-ui/tests/locales/en/translations.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | locales/en/translations.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/translations.js should pass jshint.');
  });
});
define('hoppr-ui/tests/pod/components/dashboard/dailyrevenue/grid-container/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pod/components/dashboard/dailyrevenue/grid-container/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pod/components/dashboard/dailyrevenue/grid-container/component.js should pass jshint.');
  });
});
define('hoppr-ui/tests/pod/components/dashboard/dailyrevenue/stats-container/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pod/components/dashboard/dailyrevenue/stats-container/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pod/components/dashboard/dailyrevenue/stats-container/component.js should pass jshint.');
  });
});
define('hoppr-ui/tests/pod/components/dashboard/dailyrevenue/tab-list/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pod/components/dashboard/dailyrevenue/tab-list/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pod/components/dashboard/dailyrevenue/tab-list/component.js should pass jshint.');
  });
});
define('hoppr-ui/tests/pod/components/dashboard/dailyrevenue/tab-toolbar/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pod/components/dashboard/dailyrevenue/tab-toolbar/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pod/components/dashboard/dailyrevenue/tab-toolbar/component.js should pass jshint.');
  });
});
define('hoppr-ui/tests/pod/components/ember-hoppr-grid/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pod/components/ember-hoppr-grid/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pod/components/ember-hoppr-grid/component.js should pass jshint.');
  });
});
define('hoppr-ui/tests/pod/dashboard/dailyrevenue/rooms/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pod/dashboard/dailyrevenue/rooms/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pod/dashboard/dailyrevenue/rooms/route.js should pass jshint.');
  });
});
define('hoppr-ui/tests/pod/dashboard/dailyrevenue/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pod/dashboard/dailyrevenue/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pod/dashboard/dailyrevenue/route.js should pass jshint.');
  });
});
define('hoppr-ui/tests/pod/dashboard/index/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pod/dashboard/index/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pod/dashboard/index/route.js should pass jshint.');
  });
});
define('hoppr-ui/tests/pod/dashboard/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pod/dashboard/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pod/dashboard/route.js should pass jshint.');
  });
});
define('hoppr-ui/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('hoppr-ui/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('hoppr-ui/tests/routes/ui.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/ui.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/ui.js should pass jshint.');
  });
});
define('hoppr-ui/tests/test-helper', ['exports', 'hoppr-ui/tests/helpers/resolver', 'ember-qunit'], function (exports, _hopprUiTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_hopprUiTestsHelpersResolver['default']);
});
define('hoppr-ui/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('hoppr-ui/tests/types/chartdata.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | types/chartdata.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'types/chartdata.js should pass jshint.');
  });
});
define('hoppr-ui/tests/types/chartoptions.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | types/chartoptions.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'types/chartoptions.js should pass jshint.');
  });
});
define('hoppr-ui/tests/types/grid.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | types/grid.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'types/grid.js should pass jshint.\ntypes/grid.js: line 15, col 8, Missing semicolon.\ntypes/grid.js: line 20, col 8, Missing semicolon.\ntypes/grid.js: line 25, col 8, Missing semicolon.\ntypes/grid.js: line 31, col 8, Missing semicolon.\ntypes/grid.js: line 36, col 7, Missing semicolon.\ntypes/grid.js: line 41, col 6, Missing semicolon.\ntypes/grid.js: line 48, col 36, \'val\' is defined but never used.\ntypes/grid.js: line 51, col 8, Missing semicolon.\ntypes/grid.js: line 56, col 38, \'val\' is defined but never used.\ntypes/grid.js: line 59, col 8, Missing semicolon.\ntypes/grid.js: line 63, col 42, \'val\' is defined but never used.\ntypes/grid.js: line 66, col 8, Missing semicolon.\ntypes/grid.js: line 71, col 36, \'val\' is defined but never used.\ntypes/grid.js: line 75, col 8, Missing semicolon.\ntypes/grid.js: line 81, col 39, \'val\' is defined but never used.\ntypes/grid.js: line 84, col 7, Missing semicolon.\ntypes/grid.js: line 87, col 37, \'val\' is defined but never used.\ntypes/grid.js: line 90, col 6, Missing semicolon.\ntypes/grid.js: line 7, col 9, \'columns\' is defined but never used.\ntypes/grid.js: line 8, col 9, \'groupedHeaders\' is defined but never used.\ntypes/grid.js: line 116, col 2, Expected \'}\' to match \'{\' from line 3 and instead saw \')\'.\ntypes/grid.js: line 116, col 3, Expected \')\' and instead saw \';\'.\ntypes/grid.js: line 116, col 4, Missing semicolon.\n\n23 errors');
  });
});
define('hoppr-ui/tests/unit/pod/dashboard/dailyrevenue/rooms/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:dashboard/dailyrevenue/rooms', 'Unit | Route | dashboard/dailyrevenue/rooms', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('hoppr-ui/tests/unit/pod/dashboard/dailyrevenue/rooms/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/pod/dashboard/dailyrevenue/rooms/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pod/dashboard/dailyrevenue/rooms/route-test.js should pass jshint.');
  });
});
define('hoppr-ui/tests/unit/pod/dashboard/dailyrevenue/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:dashboard/dailyrevenue', 'Unit | Route | dashboard/dailyrevenue', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('hoppr-ui/tests/unit/pod/dashboard/dailyrevenue/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/pod/dashboard/dailyrevenue/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pod/dashboard/dailyrevenue/route-test.js should pass jshint.');
  });
});
define('hoppr-ui/tests/unit/pod/dashboard/index/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:dashboard/index', 'Unit | Route | dashboard/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('hoppr-ui/tests/unit/pod/dashboard/index/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/pod/dashboard/index/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pod/dashboard/index/route-test.js should pass jshint.');
  });
});
define('hoppr-ui/tests/unit/pod/dashboard/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:dashboard', 'Unit | Route | dashboard', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('hoppr-ui/tests/unit/pod/dashboard/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/pod/dashboard/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pod/dashboard/route-test.js should pass jshint.');
  });
});
define('hoppr-ui/tests/unit/routes/ui-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:ui', 'Unit | Route | ui', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('hoppr-ui/tests/unit/routes/ui-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/ui-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/ui-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('hoppr-ui/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map