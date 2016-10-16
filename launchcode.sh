#!/bin/bash

# Create the file externalvars.cred with an export line per environment variable secret
# See externalars.cred.sample for an example style
. externalvars.cred

# Launch vscode (see docs on shell command to add to path: https://code.visualstudio.com/docs/setup/mac)
code .
