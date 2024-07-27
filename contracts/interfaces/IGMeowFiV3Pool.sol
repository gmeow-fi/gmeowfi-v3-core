// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.5.0;

import './pool/IGMeowFiV3PoolImmutables.sol';
import './pool/IGMeowFiV3PoolState.sol';
import './pool/IGMeowFiV3PoolDerivedState.sol';
import './pool/IGMeowFiV3PoolActions.sol';
import './pool/IGMeowFiV3PoolOwnerActions.sol';
import './pool/IGMeowFiV3PoolEvents.sol';

/// @title The interface for a Uniswap V3 Pool
/// @notice A Uniswap pool facilitates swapping and automated market making between any two assets that strictly conform
/// to the ERC20 specification
/// @dev The pool interface is broken up into many smaller pieces
interface IGMeowFiV3Pool is
    IGMeowFiV3PoolImmutables,
    IGMeowFiV3PoolState,
    IGMeowFiV3PoolDerivedState,
    IGMeowFiV3PoolActions,
    IGMeowFiV3PoolOwnerActions,
    IGMeowFiV3PoolEvents
{}
