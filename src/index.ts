import type { OnRpcRequestHandler } from '@metamask/snaps-types';
import {
  heading,
  panel,
  text,
  /* image, */ spinner,
  divider,
} from '@metamask/snaps-ui';

/**
 * Handle incoming JSON-RPC requests, sent through `wallet_invokeSnap`.
 *
 * @param args - The request handler args as object.
 * @param args.origin - The origin of the request, e.g., the website that
 * invoked the snap.
 * @param args.request - A validated JSON-RPC request object.
 * @returns The result of `snap_dialog`.
 * @throws If the request method is not valid for this snap.
 */
export const onRpcRequest: OnRpcRequestHandler = ({ origin, request }) => {
  switch (request.method) {
    case 'hello':
      return snap.request({
        method: 'snap_dialog',
        params: {
          type: 'confirmation',
          content: panel([
            heading('heading'),
            text(`Hello, **${origin}**!`),
            divider(),
            text('text _italic_'),
            spinner(),
            // image(),
            panel([heading('heading')]),
          ]),
        },
      });
    default:
      throw new Error('Method not found.');
  }
};
