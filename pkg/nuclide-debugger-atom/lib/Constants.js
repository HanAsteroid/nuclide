'use babel';
/* @flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

const Actions = Object.freeze({
  SET_DEBUGGER_INSTANCE: 'SET_DEBUGGER_INSTANCE',
  SET_ERROR: 'SET_ERROR',
  ADD_SERVICE: 'ADD_SERVICE',
  REMOVE_SERVICE: 'REMOVE_SERVICE',
  SET_PROCESS_SOCKET: 'SET_PROCESS_SOCKET',
  DEBUGGER_MODE_CHANGE: 'DEBUGGER_MODE_CHANGE',
  ADD_DEBUGGER_PROVIDER: 'ADD_DEBUGGER_PROVIDER',
  REMOVE_DEBUGGER_PROVIDER: 'REMOVE_DEBUGGER_PROVIDER',
  UPDATE_CONNECTIONS: 'UPDATE_CONNECTIONS',
  ADD_EVALUATION_EXPRESSION_PROVIDER: 'ADD_EVALUATION_EXPRESSION_PROVIDER',
  REMOVE_EVALUATION_EXPRESSION_PROVIDER: 'REMOVE_EVALUATION_EXPRESSION_PROVIDER',
  ADD_WATCH_EXPRESSION: 'ADD_WATCH_EXPRESSION',
  REMOVE_WATCH_EXPRESSION: 'REMOVE_WATCH_EXPRESSION',
  UPDATE_WATCH_EXPRESSION: 'UPDATE_WATCH_EXPRESSION',
  TRIGGER_DEBUGGER_ACTION: 'TRIGGER_DEBUGGER_ACTION',
  ADD_REGISTER_EXECUTOR: 'ADD_REGISTER_EXECUTOR',
  REMOVE_REGISTER_EXECUTOR: 'REMOVE_REGISTER_EXECUTOR',
  REGISTER_CONSOLE: 'REGISTER_CONSOLE',
  UNREGISTER_CONSOLE: 'UNREGISTER_CONSOLE',
  UPDATE_CALLSTACK: 'UPDATE_CALLSTACK',
  OPEN_SOURCE_LOCATION: 'OPEN_SOURCE_LOCATION',
  CLEAR_INTERFACE: 'CLEAR_INTERFACE',
  SET_SELECTED_CALLFRAME_LINE: 'SET_SELECTED_CALLFRAME_LINE',
  ADD_BREAKPOINT: 'ADD_BREAKPOINT',
  DELETE_BREAKPOINT: 'DELETE_BREAKPOINT',
  TOGGLE_BREAKPOINT: 'TOGGLE_BREAKPOINT',
  UPDATE_LOCALS: 'UPDATE_LOCALS',
  TOGGLE_PAUSE_ON_EXCEPTION: 'TOGGLE_PAUSE_ON_EXCEPTION',
  TOGGLE_PAUSE_ON_CAUGHT_EXCEPTION: 'TOGGLE_PAUSE_ON_CAUGHT_EXCEPTION',
  UPDATE_THREADS: 'UPDATE_THREADS',
  NOTIFY_THREAD_SWITCH: 'NOTIFY_THREAD_SWITCH',
});

module.exports = {
  Actions,
};
