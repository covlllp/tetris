import * as React from 'react';
import { connect } from 'react-redux';

import { View } from 'component/view';
import { getBoardWithCurrentPiece } from 'data/selector';
import { Block, StoreShape } from 'data/types';

interface AppProps {
  board: (Block | null)[][];
}

const App: React.SFC<AppProps> = props => <View board={props.board} />;

const ConnectedApp = connect((state: StoreShape) => ({
  board: getBoardWithCurrentPiece(state),
}))(App);

export { ConnectedApp as App };
