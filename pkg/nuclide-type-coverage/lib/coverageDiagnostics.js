Object.defineProperty(exports, '__esModule', {
  value: true
});

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

exports.diagnosticProviderForResultStream = diagnosticProviderForResultStream;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _assert2;

function _assert() {
  return _assert2 = _interopRequireDefault(require('assert'));
}

var _rxjs2;

function _rxjs() {
  return _rxjs2 = require('rxjs');
}

var _nuclideCommons2;

function _nuclideCommons() {
  return _nuclideCommons2 = require('../../nuclide-commons');
}

function diagnosticProviderForResultStream(results, isEnabledStream) {
  var toggledResults = (0, (_nuclideCommons2 || _nuclideCommons()).toggle)(results, isEnabledStream);

  return {
    updates: (0, (_nuclideCommons2 || _nuclideCommons()).compact)(toggledResults.map(diagnosticsForResult)),
    invalidations: (_rxjs2 || _rxjs()).Observable.merge(
    // Invalidate diagnostics when display is disabled
    isEnabledStream.filter(function (enabled) {
      return !enabled;
    }), toggledResults.filter(function (result) {
      switch (result.kind) {
        case 'not-text-editor':
        case 'no-provider':
        case 'provider-error':
        case 'pane-change':
          return true;
        case 'result':
          return result.result == null;
        default:
          return false;
      }
    })).mapTo({ scope: 'all' })
  };
}

/**
 * Preconditions:
 *   result.editor.getPath() != null
 *
 * This is reasonable because we only query providers when there is a path available for the current
 * text editor.
 */
function diagnosticsForResult(result) {
  if (result.kind !== 'result') {
    return null;
  }
  var value = result.result;
  if (value == null) {
    return null;
  }

  var editorPath = result.editor.getPath();
  (0, (_assert2 || _assert()).default)(editorPath != null);

  var providerName = result.provider.displayName;

  var diagnostics = value.uncoveredRegions.map(function (region) {
    return uncoveredRangeToDiagnostic(region, editorPath, providerName);
  });

  return {
    filePathToMessages: new Map([[editorPath, diagnostics]])
  };
}

function uncoveredRangeToDiagnostic(region, path, providerName) {
  var text = region.message != null ? region.message : 'Not covered by ' + providerName;
  return {
    scope: 'file',
    providerName: 'Type Coverage',
    type: 'Warning',
    filePath: path,
    range: region.range,
    text: text
  };
}