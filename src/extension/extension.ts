import * as vscode from 'vscode';
import { getGreeting } from '../core/greeting';

export function activate(context: vscode.ExtensionContext): void {
  const disposable = vscode.commands.registerCommand('plotline.helloWorld', () => {
    vscode.window.showInformationMessage(getGreeting());
  });

  context.subscriptions.push(disposable);
}

export function deactivate(): void {
  // No teardown required for M0.
}
