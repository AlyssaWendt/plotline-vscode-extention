import * as assert from 'assert';
import * as vscode from 'vscode';

suite('Extension activation', () => {
  test('registers the plotline.helloWorld command', async () => {
    const extension = vscode.extensions.getExtension('plotline-dev.plotline');
    assert.ok(extension, 'extension should be found');

    await extension!.activate();

    const commands = await vscode.commands.getCommands(true);
    assert.ok(
      commands.includes('plotline.helloWorld'),
      'plotline.helloWorld command should be registered',
    );
  });

  test('executes the hello world command without throwing', async () => {
    await assert.doesNotReject(() => Promise.resolve(vscode.commands.executeCommand('plotline.helloWorld')));
  });
});
