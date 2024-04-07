Initialize the agent in the factory environment

While the factory is operating:
    Observe the environment
    If a part is detected:
        Check the type of the part
        If the part is the type that needs to be picked:
            Move towards the part
            Pick up the part
        Else:
            Move to the next part
    Else:
        Continue observing the environment
