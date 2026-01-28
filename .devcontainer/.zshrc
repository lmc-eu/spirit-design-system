# Prompt: green user, blue directory, reset
PS1='%F{green}spirit-dev%f %F{blue}%~%f $ '

# Enable colored output
autoload -U colors && colors

# Enable colored ls and grep
alias ls='ls --color=auto'
alias grep='grep --color=auto'

# Persist zsh history
export HISTFILE=/commandhistory/.zsh_history
export HISTSIZE=10000
export SAVEHIST=10000
setopt APPEND_HISTORY
setopt SHARE_HISTORY

# Smart completion
autoload -Uz compinit && compinit
zstyle ':completion:*' menu select
zstyle ':completion:*' matcher-list 'm:{a-z}={A-Z}' 'l:|=* r:|=*'

# Add Claude Code to PATH
export PATH="$HOME/.local/bin:$PATH"
