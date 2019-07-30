# Intro to State Channels (Lab)

Below are the architectural details for a simple on-chain-consent contract

## METHODS
```JS
submitConsensus onlySelf (bool)
execute onlyOwner( )
selfDestruct onlyOwner ( )
reset (participants, actionHash)
```

## STATES
> Inactive, Active, Consented, Executed

## PRIVATE METHODS
```JS
consented( )
runAction( )
addAction(methodHash, target)
addParticipants( address[ ] )
```

`submitConsensus()` and `execute` methods would need *signatures*.

This contract would evaluate or execute certain action on unanimous consent.
